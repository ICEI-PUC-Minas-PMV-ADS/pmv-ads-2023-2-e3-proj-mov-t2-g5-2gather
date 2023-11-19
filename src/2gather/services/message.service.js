import { sendAuthenticatedRequest } from "./auth.services.js";

export const getMessageList = async ({ idGroup }) => {
  try {
    const data = { idGroup };
    const result = await sendAuthenticatedRequest(
      "/message/list/",
      "POST",
      data
    );
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const SaveMessage = async ({text, idSentBy, idGroup, pkeSentBy, pkeReceiver, readBy}) => {
    try {
        const data = { text:text, idSentBy:idSentBy, idGroup:idGroup, pkeSentBy:pkeSentBy, pkeReceiver:pkeReceiver, priority:0, readBy: [readBy] }
        const result = await sendAuthenticatedRequest('/message/create/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
//Nesse caso precisamos apresentar com quem estamos trocando as mensagens:
export const GetMessages = async ({ idSentBy }) => {
  try {
    const data = { idSentBy };
    const result = await sendAuthenticatedRequest(
      "/message/list/",
      "POST",
      data
    );
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const onMessageReceived = (newMessage, activeChat, showToast) => {
  if (newMessage.chatId !== activeChat) {
    showToast(newMessage.previewText, newMessage.senderName, "2Gather");
  };
};
export const AddReadBy = async ({ readBy, idMessage }) => {
    try {
        let data ={ readBy: [readBy] }
        const result = await sendAuthenticatedRequest(`/message/update/${idMessage}/readBy/add`, 'PUT', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
