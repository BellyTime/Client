import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { chatImageState } from "../../state/atom";
import { useRecoilState } from "recoil";

export const ContactList = ({ setInviteId, contact, IsFriend }) => {
  const router = useRouter();
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  const [count, setCount] = useState(0);
  const [contactCheck, setContactCheck] = useState(
    new Array(contact.length).fill(false)
  );
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  const handleContact = (inviteId, name, profileImg) => {
    setInviteId((old) => [...new Set([...old, inviteId])]);
    setContactInfo(({ contactImage, roomName, contactId }) => ({
      contactImage: [
        ...contactImage,
        profileImg == "null" ? "/public/icon.png" : profileImg,
      ],
      roomName: [...roomName, name],
      contactId: [...contactId, inviteId],
    }));
  };
  useEffect(() => {
    console.log(contactCheck);
  }, [contactCheck]);
  return (
    <>
      {contact &&
        IsFriend &&
        contact.map(
          ({ name, friendId, profileImg, shopId, shopName }, index) => (
            <div key={uuidv4()} className="w-full flex justify-between">
              <div>
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src={profileImg == "null" ? "/public/icon.png" : profileImg}
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
                  setContactCheck((old) =>
                    old.map((item, idx) =>
                      idx == index ? (item = !item) : item
                    )
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
          )
        )}
    </>
  );
};
