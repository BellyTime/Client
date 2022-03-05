import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { chatImageState } from "../../state/atom";
import { useRecoilState } from "recoil";

export const ContactList = ({ inviteId, setInviteId, contact, IsFriend }) => {
  const router = useRouter();
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  const [contactCheck, setContactCheck] = useState([]);

  useEffect(() => {
    console.log(contact);
    setContactCheck(new Array(contact.length).fill(false));
  }, [contact]);
  const handleContact = (Id, name, profileImg, index) => {
    console.log("selectedId", Id);
    if (inviteId.includes(Id)) {
      const filtered = contactInfo.contact.filter(
        ({ contactId }) => contactId != Id
      );
      console.log("filtered", filtered);
      setContactInfo(({ contact, roomName }) => ({
        contact: filtered.map(({ contactId, profileImg }) => ({
          contactId,
          profileImg,
        })),
        roomName: roomName.filter((el) => el != name),
      }));

      setInviteId((old) => {
        return old.filter((val) => val !== Id);
      });
    } else {
      setInviteId((old) => [...old, Id]);

      setContactInfo(({ contact, roomName }) => ({
        contact: [...contact, { profileImg, contactId: Id }],
        roomName: [...roomName, name],
      }));
    }
    setContactCheck((old) =>
      old.map((item, idx) => (idx == index ? (item = !item) : item))
    );
  };
  useEffect(() => {
    console.log(contactCheck);
  }, [contactCheck]);
  return (
    <>
      {contact &&
        IsFriend &&
        contact.map(({ name, profileImg, contactId }, index) => (
          <div key={uuidv4()} className="w-full flex justify-between">
            <div>
              <img
                className="inline object-cover w-16 h-16 mr-2 rounded-full"
                src={profileImg == "null" ? "/public/icon.png" : profileImg}
              />
              <span>{name}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => {
                handleContact(contactId, name, profileImg, index);
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
