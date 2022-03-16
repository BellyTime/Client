export const useSetChatRoomState = (
  setAllContent,
  mssg,
  startChatInfo,
  setStartChatInfo
) => {
  setAllContent((old) => [...old, mssg]);
  if (mssg.sender == -1) {
    setStartChatInfo(({ contact, roomName }) => ({
      roomName,
      contact: contact.filter(({ nickName }) => nickName !== mssg.nickName),
    }));
  }
  if (mssg.sender == -2) {
    const newArray = [
      ...startChatInfo.contact,
      {
        contactId: mssg.contactId,
        profileImg: mssg.profileImg,
        nickName: mssg.nickName,
      },
    ];
    const uniqueArray = [
      ...new Set(newArray.map((o) => JSON.stringify(o))),
    ].map((s) => JSON.parse(s));
    setStartChatInfo(({ contact, roomName }) => ({
      contact: [...uniqueArray],
      roomName,
    }));
  }
};
