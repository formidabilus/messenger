import { Message } from "@/typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { Providers } from "./providers";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/get-messages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;
  const session = await getServerSession(authOptions);

  console.log("Home session: ", session);

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}
