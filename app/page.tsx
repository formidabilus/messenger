import { Message } from "@/typings";
import { Inter } from "next/font/google";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/get-messages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}
