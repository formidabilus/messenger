"use client";

import { clientPusher } from "@/pusher";
import { Message } from "@/typings";
import fetcher from "@/utils/fetchMessages";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import useSWR from "swr";
import MessageComponent from "./MessageComponent";

type Props = {
  initialMessages: Message[];
};

const MessageList = ({ initialMessages }: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR("/api/get-messages", fetcher, {
    revalidateOnFocus: false,
  });

  const { data: session } = useSession();

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages?.find((message) => message?.id === data?.id)) return;
      if (!messages) {
        await mutate(fetcher);
      } else {
        await mutate(fetcher, {
          optimisticData: [data, ...(messages as Message[])],
          rollbackOnError: true,
          populateCache: true,
          revalidate: false,
        });
      }
    });

    return () => {
      channel.unbind("new-message");
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    session && (
      <div className="space-y-5 px5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
        {(messages || initialMessages)?.map((message) => (
          <MessageComponent key={message?.id} message={message} />
        ))}
      </div>
    )
  );
};

export default MessageList;
