"use client";
import { useState } from "react";
import Image from "next/image";
import run from "@/utils/gemini/rag";
import React from "react";

interface Chat {
  message: string;
  sender: "USER" | "AI";
}

const getChats = (chat: Chat, index: number) => {
  if (chat.sender === "USER") {
    return (
      <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1" key={index}>
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div className="rounded-full bg-gray-100 border p-1">
            <svg
              stroke="none"
              fill="black"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
            </svg>
          </div>
        </span>
        <p className="leading-relaxed">
          <span className="block font-bold text-gray-700">You </span>
          {chat.message}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div className="rounded-full bg-gray-100 border p-1">
            <svg
              stroke="none"
              fill="black"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              ></path>
            </svg>
          </div>
        </span>
        <p className="leading-relaxed">
          <span className="block font-bold text-gray-700">SYC </span>
          {chat.message}
        </p>
      </div>
    );
  }
};

const chatbot = () => {
  const [showChats, setShowChats] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const defaultAiText: Chat = {
    message: "Hi, how can I help you today?",
    sender: "AI",
  };
  const [chats, setChats] = useState<Chat[]>([defaultAiText]);

  const handleUserQuery = () => {
    const newUserChat: Chat = {
      message: query,
      sender: "USER",
    };
    setChats((p) => [...p, newUserChat]);
    const copyQuery = query;
    setQuery("");
    run(copyQuery)
      .then((response) =>
        setChats((p) => [...p, { sender: "AI", message: response }])
      )
      .catch((error) => console.error(error));
  };
  return (
    <div className="syc-chatbot">
      <button
        title="chat"
        onClick={() => setShowChats((p) => !p)}
        className={`fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-14 h-14 max-sm:w-10 max-sm:h-10 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900 ${
          showChats && "hidden"
        } `}
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <svg
          xmlns=" http://www.w3.org/2000/svg"
          width="20"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>
      <div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          display: showChats ? "block" : "none",
          zIndex: 100,
          overflowY: "auto",
        }}
        className="fixed  bottom-2 right-8 max-sm:right-1 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[650px] max-sm:w-[370px]  "
      >
        <button title="cross" onClick={() => setShowChats(false)} className="">
          <Image
            src={"/cross.png"}
            alt="logo"
            width={30}
            height={30}
            className="ml-[360px] max-sm:ml-[300px]"
            // style={{ marginLeft: "360px" }}
          ></Image>
        </button>
        <div className="flex flex-col bg-white space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">SYC AI</h2>
          <p className="text-sm text-[#6b7280] leading-3">
            Your Mental Health AI Guide
          </p>
        </div>
        <div
          className="pr-4 max-sm:pr-0 h-[474px] min-w-screen table"
          // style={{ minWidth: "100%", display: "table" }}
        >
          {chats.map((c, i) => (
            <React.Fragment key={i}>{getChats(c, i)}</React.Fragment>
          ))}
        </div>
        <div className="flex items-center pt-0">
          <form className="flex items-center justify-center w-full space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleUserQuery();
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default chatbot;
