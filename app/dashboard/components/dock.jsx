import {
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Dock() {
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
    <div className="dock dock-md bg">
      {items.map((i, key) => {
        return (
          <button key={key} className={key == 0 ? "dock-active" : ""}>
            {i.icon}
            <span className="dock-label">{i.text}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Dock;
