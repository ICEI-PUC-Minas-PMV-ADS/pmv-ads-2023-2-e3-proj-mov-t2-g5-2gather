import React, { useEffect, useState, useRef } from "react";
import { View, TextInput, FlatList, Text, StyleSheet, Pressable, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import socket from "../services/socket";
import MessageBox from "../components/unit/MessageBox";
import { Appbar } from 'react-native-paper';
import { SaveMessage, getMessageList } from "../services/message.service";
import { useUser } from "../contexts/UserContext";
import { Encrypt, Decrypt } from "../services/encryption.service";
 import { useChat } from "../contexts/ChatContext";

const Chat = ({ route, navigation }) => {
	 const { setActiveChat } = useChat();
	const { id, name, privateE2eContext, publicE2eContext } = useUser("");
	const { room, partnerName, partnerPke, partnerPhoto, roomId } = route.params;
	const [chatMessages, setChatMessages] = useState([]);
	const [message, setMessage] = useState("");
	const messageListRef = useRef(null);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	let image = (room.isPrivate ? partnerPhoto : room.Image)
	image = image ? { uri: image } :  require('../assets/profile.png')

	const getMessages = async () => {
		try {
			//ideal é ter as msgs em um local storage, caso não tenha, ai sim tentar pegar da api.
			const result = await getMessageList({ idGroup: roomId }) || [];
			const decryptedResult = result.map(item => decryptMessage(item, item.text));

			setChatMessages(decryptedResult);
		} catch (error) {
			console.log(error)
		}
	};

	function decryptMessage(item, text) {
		let publicKey
		if(message.many || !room.isPrivate){
			publicKey = item.pkeReceiver
		}
		else{
			publicKey = item.idSentBy == id ? item.pkeReceiver : item.pkeSentBy
		}
		const decryptedText = Decrypt(text, publicKey, privateE2eContext).message;

		return {
			...item,
			text: decryptedText
		};
	}

 	useEffect(() => {
	    setActiveChat(roomId);
		socket.emit("findRoom", roomId);
		(async () => {
			await getMessages()
		})()

		messageListRef.current.scrollToEnd({ animated: true });
		setIsFirstLoad(false);
		return () => {
			setActiveChat(null);
			socket.off("foundRoom");
		  };
	}, [roomId, setActiveChat, isFirstLoad]); 

	const handleNewMessage = () => {
		const hour = new Date().getHours().toString().padStart(2, "0");
		const mins = new Date().getMinutes().toString().padStart(2, "0");
		if (name && message && privateE2eContext) {
			let encryptedMessage = null
			if (room.isPrivate) {
				if (partnerPke) {
					encryptedMessage = Encrypt({'message':message}, partnerPke, privateE2eContext)
					SaveMessage({ text: encryptedMessage, idSentBy: id, idGroup: roomId, pkeSentBy: publicE2eContext, pkeReceiver: partnerPke })
				} else {
					alert("This user needs to login for the first time before receiving messages.")
				}
			} else {
				let messages = {}
				room.members.map((m) => {
					messages[m.id] = Encrypt({'message':message}, m.pke, privateE2eContext)

				})
				encryptedMessage = messages

				//SaveMessage({ text: message, idSentBy: id, idGroup: roomId })
			}
			setMessage('');
			let m = encryptedMessage ? encryptedMessage : message
			let partnerPublicKey = partnerPke ? partnerPke : null
			socket.emit("newMessage", {
				message: m,
				room_id: roomId,
				user: name,
				timestamp: { hour, mins },
				pkeSentBy: publicE2eContext,
				pkeReceiver: partnerPublicKey,
				idSentBy: id,
				many: room.isPrivate ? false : true,
			});
		}else{
			setMessage('');
		}
	};

	useEffect(() => {
		socket.on("roomMessage", (message) => {
			let decryptedMessage = "Couldn't decrypt the message"
			if(message.many || !room.isPrivate){
				decryptedMessage = id in message.text ? decryptMessage(message, message.text[id]) : "Couldn't decrypt the message"
			}else{
				decryptedMessage = decryptMessage(message, message.text)
			}
			setChatMessages(prevMessages => [...prevMessages, decryptedMessage]);
		});
	}, [socket]);

	return (

		<View style={styles.container}>
			<View >
				<Appbar.Header style={styles.header}>
					<Appbar.BackAction onPress={() => navigation.navigate("Contacts")} />
					<TouchableOpacity onPress={() => { console.log("Deverá abrir a tela de detalhes?") }}>
						<View style={styles.contentContainer}>
							<Image
								style={styles.contactPhoto}
								source={image}
							/>
							<Text style={styles.contactName}>{room.isPrivate ? partnerName : room.title}</Text>
						</View>
					</TouchableOpacity>
				</Appbar.Header>


			</View>
			<FlatList style={styles.messageContainer}
				ref={messageListRef}
				data={chatMessages}
				renderItem={({ item }) => <MessageBox isPrivate={room.isPrivate} item={item} user={name} />}
				keyExtractor={(item) => item.id.toString()}
				onContentSizeChange={() => {
					if (!isFirstLoad) {
						messageListRef.current.scrollToEnd({ animated: true });
					}
				}}
			/>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Comece a digitar"
					onChangeText={(value) => setMessage(value)}
					value={message}
				/>
				<Pressable style={styles.sendButton} onPress={handleNewMessage}>
					<FontAwesome name="send" size={24} color="blue" />
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	header: {
		backgroundColor: '#1A4971',
		padding: 20,
	},
	contentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	contactPhoto: {
		width: 30,
		height: 30,
		borderRadius: 20,
		marginRight: 10,
	},
	contactName: {
		color: '#ffffff',
		fontSize: 18,
	},
	messageContainer: {
		flex: 1,
		paddingVertical: 15,
		paddingHorizontal: 10,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: "#F1F3F5",
		borderRadius: 20,
		marginVertical: 20,
		marginHorizontal: 15,
	},
	input: {
		flex: 1,
		padding: 10,
	},
	sendButton: {
		marginHorizontal: 10,
	},
});

export default Chat;