"use client";

import {
  ChatBubbleLeftRightIcon,
  ClipboardIcon,
  GlobeAsiaAustraliaIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Dock({ className }) {
  const pathName = usePathname();
  const [path, setPath] = useState(null);

  const items = [
    {
      icon: <GlobeAsiaAustraliaIcon className="size-7 opacity-80" />,
      text: "Explore",
      path: "/",
    },
    {
      icon: <ClipboardIcon className="size-7 opacity-80" />,
      text: "Tasks",
      path: "/tasks",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="size-7 opacity-80" />,
      text: "Chat",
      path: "/chat",
    },
    {
      icon: <HeartIcon className="size-7 opacity-80" />,
      text: "Support",
      path: "/support",
    },
  ];

  useEffect(() => {
    setPath(pathName === "/dashboard" ? "/dashboard/" : pathName);
  }, [pathName]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        window.innerWidth < 768 &&
        document.getElementsByClassName("scroller").length > 0
      ) {
        if (window.scrollY > 213) {
          const elems = document.getElementsByClassName("scroller");
          for (let i = 0; i < elems.length; i++)
            elems[i].classList.replace(
              "overflow-y-hidden",
              "overflow-y-scroll"
            );
        } else if (
          window.scrollY < 214 &&
          document
            .getElementsByClassName("scroller")[0]
            .classList.contains("overflow-y-scroll")
        ) {
          const elems = document.getElementsByClassName("scroller");
          for (let i = 0; i < elems.length; i++)
            elems[i].classList.replace(
              "overflow-y-scroll",
              "overflow-y-hidden"
            );
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", (e) => {});
    };
  }, []);

  return (
    <div
      className={`${className} dock dock-md md:shadow-md md:absolute md:w-[90%] md:left-1/2 md:-translate-x-1/2 overflow-hidden md:top-0 md:bottom-auto md:rounded-b-4xl bg`}
    >
      {items.map((i, key) => {
        return (
          <button
            key={key}
            className={`!lg:flex ${
              path === `/dashboard${i.path}` ? "dock-active" : ""
            }`}
          >
            <Link
              onClick={() => setPath(`/dashboard${i.path}`)}
              className="flex flex-col items-center active:scale-75 duration-200"
              href={`/dashboard${i.path}`}
            >
              {i.icon}
              <span className="dock-label">{i.text}</span>
            </Link>
          </button>
        );
      })}
    </div>
  );
}

export default Dock;
