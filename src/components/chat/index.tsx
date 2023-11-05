"use client";

import classNames from "classnames";
import { useState } from "react";

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleChatbox() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button
          onClick={() => toggleChatbox()}
          id="open-chat"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
          </svg>
          &nbsp; Chat
        </button>
      </div>
      <div
        id="chat-container"
        className={
          classNames({ hidden: !isOpen }) + " fixed bottom-16 right-4 w-96"
        }
      >
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button
              onClick={() => toggleChatbox()}
              id="close-chat"
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-robot"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                <path d="M12 2v2"></path>
                <path d="M9 12v9"></path>
                <path d="M15 12v9"></path>
                <path d="M5 16l4 -2"></path>
                <path d="M15 14l4 2"></path>
                <path d="M9 18h6"></path>
                <path d="M10 8v.01"></path>
                <path d="M14 8v.01"></path>
              </svg>
            </button>
          </div>
          <div id="chatbox" className="p-4 h-80 overflow-y-auto">
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                hello
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                this example of chat
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                design with tailwind
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
          </div>
          <div className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              id="send-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
