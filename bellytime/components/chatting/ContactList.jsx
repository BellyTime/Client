import { plusChatRoom } from "@/fetch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { chatImageState } from "../../state/atom";
import { useRecoilState } from "recoil";

export const ContactList = ({ contact, IsFriend }) => {
  const router = useRouter();
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  const handleContact = (inviteId, name, profileImg) => {
    plusChatRoom(inviteId, IsFriend).then((res) => {
      if (res) {
        setContactInfo({
          contactImage: profileImg,
          contactName: name,
        });
        router.push(`/chatting/room/${res}`);
      }
    });
  };
  return (
    <>
      {contact &&
        IsFriend &&
        contact.map(({ name, friendId, profileImg, shopId, shopName }) => (
          <div key={uuidv4()} className="w-full flex justify-between">
            <div>
              <img
                className="inline object-cover w-16 h-16 mr-2 rounded-full"
                src={profileImg}
              />
              <span>{IsFriend == "customer" ? name : shopName}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => {
                handleContact(
                  IsFriend == "customer" ? friendId : shopId,
                  IsFriend == "customer" ? name : shopName,
                  profileImg
                );
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
        ))}
    </>
  );
};
