import { Inter } from "next/font/google";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}
