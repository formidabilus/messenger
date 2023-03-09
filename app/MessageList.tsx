"use client";

import { Message } from "@/typings";
import fetcher from "@/utils/fetchMessages";
import useSWR from "swr";
import MessageComponent from "./MessageComponent";

type Props = {};

const MessageList = (props: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/get-messages", fetcher);

  return (
    <div className="space-y-5 px5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {messages?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
