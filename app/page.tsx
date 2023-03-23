import { Message } from "@/typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

type Props = {};

export default async function Home({}: Props) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-messages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}
