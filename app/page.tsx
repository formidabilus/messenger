import { Message } from "@/typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

type Props = {};

export default async function Home({}: Props) {
  const data = await fetch(
    "https://mess-chat.vercel.app/api/get-messages"
  ).then((res) => res.json());

  console.log(data);
  const messages: Message[] = data?.messages;
  console.log(messages);

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}
