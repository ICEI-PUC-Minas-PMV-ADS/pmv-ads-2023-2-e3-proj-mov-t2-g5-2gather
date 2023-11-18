import { io } from "socket.io-client";
const socket = io.connect("http://207.90.194.172:4000");
export default socket;