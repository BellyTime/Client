import { Link } from "../Link";
import { Icon } from "./Icon";

const Navbar = () => {
  return (
    <div className="border-4 border-indigo-500/100 bottom-0 flex justify-evenly fixed w-full h-[10vh]">
      <Icon href="/" iconImg="/icons/home.png" />
      <Icon href="/search" iconImg="/icons/search.png" />
      <Icon href="/coolTime" iconImg="/icons/clock.png" />
      <Icon href="/chatting/chatList" iconImg="/icons/chat-alt-2.png" />
      <Icon href="/mypage" iconImg="/icons/user.png" />
    </div>
  );
};

export { Navbar };
