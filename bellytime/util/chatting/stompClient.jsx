import SockJS from "sockjs-client";
import Stomp from "stompjs";
export const stompClient = (url) => {
  const socketJs = new SockJS("https://backend.bellytime.kr/chat/chatting");
  let stompcli = Stomp.over(socketJs);
  return stompcli;
};
