import { Link } from "../Link";
import { Icon } from "./Icon";

const Navbar = () => {
  return (
    <div className=" border-4 border-indigo-500/100 bottom-0  flex justify-evenly fixed w-full">
      <Icon href="/" iconImg="/icons/home.png" />
      <Icon href="/" iconImg="/icons/search.png" />
      <Icon href="/coolTime" iconImg="/icons/clock.png" />
      <Icon href="/" iconImg="/icons/chat-alt-2.png" />
      <Icon href="/" iconImg="/icons/user.png" />
    </div>
  );
};

export { Navbar };
