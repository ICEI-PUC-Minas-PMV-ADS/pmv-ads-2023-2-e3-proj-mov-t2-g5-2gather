import { io } from "socket.io-client";
const socket = io.connect("http://www.try.rpgsands.com:4000");
export default socket;