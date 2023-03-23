import { Message } from "@/typings";

export const uploadMessageToUpstash = async (
  message: Message,
  messages: Message[]
) => {
  const data = await fetch("/api/add-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  }).then((res) => res.json());

  return [data.message, ...messages];
};
