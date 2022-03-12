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
    console.log(contactInfo.contact.length);
    setContactCheck(
      new Array(contact.length - contactInfo?.contact.length).fill(false)
    );
  }, [contact,contactInfo]);
  const handleContact = (Id, nickName, profileImg, index) => {
    console.log("selectedId", Id);

    if (inviteId.includes(Id)) {
      setInviteId((old) => {
        return old.filter((val) => val !== Id);
      });
    } else {
      setInviteId((old) => [...old, Id]);
    }
    setContactCheck((old) => old.map((item, i) => (i == index ? !item : item)));
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
            <input
              type="checkbox"
              name="friendList"
              onChange={(e) => {
                e.preventDefault();
                e.target.checked = !e.target.checked;
                handleContact(contactId, name, profileImg, index);
              }}
              checked={contactCheck[index]}
            ></input>
          </div>
        ))}
    </>
  );
};
