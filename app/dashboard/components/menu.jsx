import { ArrowPathIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export const Firstmenu = () => {
  const data = [
    {
      title: "Total tasks",
      value: "21",
    },
    {
      title: "Portfolio balance",
      value: "500.50",
    },
  ];

  return (
    <div className="mx-4 bg-c1 py-6 justify-between text-white px-6 my-4 flex rounded-3xl">
      {data.map((item, key) => (
        <div key={key} className="flex flex-col items-center">
          <h3 className="opacity-80 md:text-xs">{item.title}</h3>
          <span className="text-xl md:text-lg">{item.value}</span>
        </div>
      ))}
    </div>
  );
};
export const Secondmenu = () => {
  return (
    <div className="mx-4  py-3 justify-between bg-white pr-4 pl-6 md:pl-0 md:pr-0 my-4 flex rounded-3xl">
      {["withdraw", "transaction_history"].map((link, key) => (
        <Link
          key={key}
          href={`/dashboard/${link}`}
          className="text-black btn btn-ghost py-1 md:flex-1 !h-auto flex flex-col items-center"
        >
          {!key ? (
            <BanknotesIcon className="size-6 opacity-75" />
          ) : (
            <ArrowPathIcon className="size-6 opacity-75" />
          )}
          <span>{!key ? "Withdrawal" : "Transaction History"}</span>
        </Link>
      ))}
    </div>
  );
};
