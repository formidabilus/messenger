"use client";

import { Message } from "@/typings";
import fetcher from "@/utils/fetchMessages";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import { v4 as uuid } from "uuid";

type Props = {};

const ChatInput = (props: Props) => {
  const [input, setInput] = useState("");
  const {
    data: messages,
    error,
    mutate,
  } = useSWR("/api/get-messages", fetcher);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    const messageToSend = input;
    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Allah",
      profilePic: "/meta.png",
      email: "chiriac_razvan@ymail.com ",
    };

    const uploadMessageToUpstash = async () => {
      const res = await fetch("/api/add-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      return [data.message, ...messages!];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100 bg-white"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoComplete="off"
        name="input"
        id="input"
        placeholder="Enter message here..."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-white hover:bg-gray-300 p-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent"
      >
        <svg height="30px" viewBox="0 0 24 24" width="30px">
          <path
            d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
            fill={input ? "rgb(37 99 235)" : "rgb(209 213 219)"}
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
