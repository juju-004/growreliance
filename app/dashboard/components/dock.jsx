import {
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Dock({ className }) {
  const items = [
    { icon: <GlobeAltIcon className="size-7 opacity-80" />, text: "Explore" },
    {
      icon: <HomeModernIcon className="size-7 opacity-80" />,
      text: "Analytics",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="size-7 opacity-80" />,
      text: "Chat",
    },
    { icon: <HomeModernIcon className="size-7 opacity-80" />, text: "Support" },
    { icon: <UserIcon className="size-7 opacity-80" />, text: "Me" },
  ];
  return (
    <div
      className={`${className} dock dock-md md:shadow-md md:absolute md:w-[90%] md:left-1/2 md:-translate-x-1/2 overflow-hidden md:top-0 md:bottom-auto md:rounded-b-4xl bg`}
    >
      {items.map((i, key) => {
        return (
          <button
            key={key}
            className={`!lg:flex ${key == 1 ? "dock-active" : ""}`}
          >
            {i.icon}
            <span className="dock-label">{i.text}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Dock;
