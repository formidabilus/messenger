import { serverPusher } from "@/pusher";
import { Message } from "@/typings";
import { NextResponse } from "next/server";
import redis from "../../../redis";

type Data = {
  message: Message;
};

export async function POST(req: Request) {
  const { message } = await req.json();

  const newMessage = {
    ...message,
    created_at: Date.now(),
  };

  await redis.hset("messages", message.id, JSON.stringify(newMessage));
  serverPusher.trigger("messages", "new-message", newMessage);

  return NextResponse.json({ message: newMessage });
}
