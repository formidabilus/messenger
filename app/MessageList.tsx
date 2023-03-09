"use client";

import { Message } from "@/typings";
import fetcher from "@/utils/fetchMessages";
import useSWR from "swr";

type Props = {};

const MessageList = (props: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/get-messages", fetcher);

  return (
    <div>
      {messages?.map((message) => (
        <div key={message.id}>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
