import { useRouter } from "next/router";

export default function ChatRoom() {
  const router = useRouter();
  const { id } = router.query;
  return <div>채팅방2</div>;
}
