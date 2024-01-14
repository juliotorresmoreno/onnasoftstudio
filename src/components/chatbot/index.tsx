"use client";

import type { ChatProps } from "@onnasoft/chatbot-ui";
import { useOnnasoftProvider } from "@onnasoft/chatbot-ui/lib/onnasoft.provider";
import dynamic from "next/dynamic";
import { useState } from "react";
import "@onnasoft/chatbot-ui/lib/Chat.css";
import config from "@/config";
import './styles.css'

const BOT_URL = config.BOT_URL;

const ChatBotUI = dynamic<ChatProps>(
  () => import("@onnasoft/chatbot-ui").then((module) => module.default),
  {
    ssr: false,
  }
);

export default function ChatBot() {
  const provider = useOnnasoftProvider("1", [], BOT_URL);
  const [value, setValue] = useState("");

  const payload: ChatProps = { value, onChange: setValue, provider };

  return <ChatBotUI {...payload} />;
}
