import { Message } from "@/typings";
import { NextResponse } from "next/server";
import redis from "../../../redis";

type Data = {
  message: Message;
};

export async function GET(req: Request) {
  const messagesRes = await redis.hvals("messages");

  const messages: Message[] = messagesRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.created_at - a.created_at);

  return NextResponse.json({ messages });
}
