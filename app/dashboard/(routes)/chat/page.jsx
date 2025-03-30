"use client";

import { useState, useRef, useEffect } from "react";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  EmojiHappyIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  ClockIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const CustomerCareChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Thank you for contacting support. How can I help you today?",
      sender: "agent",
      time: "10:30 AM",
      read: true,
      agent: {
        name: "Sarah (Grow reliance Agent)",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
    },
    {
      id: 2,
      text: "I'm having trouble with completing tasks",
      sender: "me",
      time: "10:32 AM",
      read: true,
    },
    {
      id: 3,
      text: "I understand. Let me check that for you. Could you share your email address?",
      sender: "agent",
      time: "10:33 AM",
      read: true,
      agent: {
        name: "Sarah (Grow reliance Agent)",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: false,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full pb-16 md:pb-0 bg-base-100">
      {/* Header with agent info */}
      <div className="navbar bg-base-200 border-b border-base-300 px-4">
        <div className="flex-1 gap-3 flex md:pl-5">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/150?img=32" alt="support agent" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold flex items-center gap-1">
              Sarah - Agent
              <ShieldCheckIcon className="w-4 h-4 text-blue-500" />
            </h2>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <div className="badge badge-success badge-xs"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-sm">
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat area with timestamp */}
      <div className="flex-1 overflow-y-hidden md:overflow-y-scroll pb-12 md:pb-0 scroller p-4 space-y-4 bg-base-100">
        <div className="text-center">
          <div className="badge badge-ghost">
            <ClockIcon className="w-3 h-3 mr-1" />
            Today, November 15
          </div>
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "agent" && (
              <div className="avatar self-end mr-2">
                <div className="w-8 rounded-full">
                  <img src={message.agent.avatar} alt={message.agent.name} />
                </div>
              </div>
            )}
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 relative ${
                message.sender === "me"
                  ? "bg-c1 text-primary-content"
                  : "bg-base-200"
              }`}
            >
              {message.sender === "agent" && (
                <div className="text-xs font-semibold mb-1">
                  {message.agent.name}
                </div>
              )}
              <p>{message.text}</p>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-xs opacity-70">{message.time}</span>
                {message.sender === "me" && (
                  <CheckIcon
                    className={`h-3 w-3 ${
                      message.read ? "text-info" : "text-gray-400"
                    }`}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-4 bg-base-200 border-t border-base-300">
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-sm btn-circle">
            <PaperClipIcon className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Type your message..."
              className="input input-bordered w-full"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
          </div>
          <button
            className={`btn btn-circle btn-sm ${
              newMessage ? "bg-c1 text-white" : "btn-ghost"
            }`}
            onClick={handleSendMessage}
          >
            <PaperAirplaneIcon className="h-5 w-5 transform -rotate-45" />
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          Our team is available Monday-Friday, 9AM-5PM
        </div>
      </div>
    </div>
  );
};

export default CustomerCareChat;
