import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { chatImageState, startChatState } from "../../state/atom";
import { useRecoilState } from "recoil";

export const ContactList = ({ inviteId, setInviteId, contact, IsFriend }) => {
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  const [startChatInfo, setStartChatInfo] = useRecoilState(startChatState);
  // const [contactCheck, setContactCheck] = useState([]);

  useEffect(() => {
    console.log(contact);
    console.log(contactInfo.contact.length);
    // setContactCheck(new Array(contact.length).fill(false));
  }, [contact, contactInfo]);

  const handleContact = (e, Id, nickName, profileImg, index) => {
    console.log("selectedId", Id);
    e.target.checked = !e.target.checked;

    if (inviteId.includes(Id)) {
      setContactInfo(({ contact }) => ({
        contact: contact.filter(({ contactId }) => contactId !== Id),
      }));
      setInviteId((old) => {
        return old.filter((val) => val !== Id);
      });
    } else {
      setInviteId((old) => [...old, Id]);
      setContactInfo(({ contact }) => ({
        contact: [...contact, { contactId: Id, profileImg, nickName }],
      }));
    }
    // setContactCheck((old) => old.map((item, i) => (i == index ? !item : item)));
  };

  // useEffect(() => {
  //   console.log(contactCheck);
  // }, [contactCheck]);

  return (
    <>
      {contact &&
        IsFriend &&
        contact.map(({ nickName, profileImg, contactId }, index) => (
          <div key={uuidv4()} className="w-full flex justify-between">
            <div>
              <img
                className="inline object-cover w-16 h-16 mr-2 rounded-full"
                src={profileImg == "null" ? "/icon.png" : profileImg}
              />
              <span>{nickName}</span>
            </div>
            {!startChatInfo.contact
              .map(({ contactId }) => contactId)
              .includes(contactId) && (
              <input
                type="checkbox"
                name="friendList"
                onChange={(e) => {
                  e.preventDefault();
                  handleContact(e, contactId, nickName, profileImg, index);
                }}
                checked={inviteId.includes(contactId)}
              ></input>
            )}
          </div>
        ))}
    </>
  );
};
