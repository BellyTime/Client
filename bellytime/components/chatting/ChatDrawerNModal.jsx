import { useState } from "react";
import { exitChatRoom, followingFriendList, plusFriend } from "../../fetch";
import { Drawer, Modal, ContactList } from "..";
import { chatImageState } from "../../state/atom";
import { useRecoilState } from "recoil";
export const ChatDrawerNModal = ({ roomId, router, isOpen, setIsOpen }) => {
  const [modal, setModal] = useState(false);
  const [inviteId, setInviteId] = useState([]);
  const [contact, setContact] = useState("");
  const [contactInfo, setContactInfo] = useRecoilState(chatImageState);
  const handleExitButton = (e) => {
    exitChatRoom(roomId).then(() => {
      router.push("/chatting/chatList");
    });
  };
  const handlePlusFriend = () => {
    setModal(true);
    followingFriendList(setContact);
  };

  const handleSetModal = () => {
    inviteId.length && plusFriend(inviteId, roomId);
    setInviteId("");
    setContactInfo({ contact: [] });
    setIsOpen(false);
    setModal(false);
  };

  const handleClose = () => {
    setInviteId("");
    setModal(false);
    setContactInfo({ contact: [] });
  };
  const handleGoReserve = () => {
    router.push(`/shop/${contactInfo.contact[0].contactId}`);
  };
  return (
    <>
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        children={
          <div>
            <button onClick={handleExitButton} className="block">
              방나가기
            </button>

            {router.query.IsFriend == "customer" ? (
              <button onClick={handlePlusFriend} className="block">
                친구초대하기
              </button>
            ) : (
              <button onClick={handleGoReserve} className="block">
                예약하기
              </button>
            )}
          </div>
        }
      />
      {modal && (
        <Modal
          setModal={handleSetModal}
          subject="친구추가"
          content={
            <ContactList
              inviteId={inviteId}
              setInviteId={setInviteId}
              contact={contact}
              IsFriend="customer"
            />
          }
          close={handleClose}
        />
      )}
    </>
  );
};
