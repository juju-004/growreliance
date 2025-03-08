import { ArrowPathIcon, BanknotesIcon } from "@heroicons/react/24/solid";
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
          <h3 className="opacity-80">{item.title}</h3>
          <span className="text-xl">{item.value}</span>
        </div>
      ))}
    </div>
  );
};
export const Secondmenu = () => {
  return (
    <div className="mx-4 bg-white  py-3 justify-between text-white pr-4 pl-6 my-4 flex rounded-3xl">
      {Array(2)
        .fill("")
        .map((_, key) => (
          <div key={key} className="text-black flex flex-col items-center">
            {!key ? (
              <BanknotesIcon className="size-7 opacity-75" />
            ) : (
              <ArrowPathIcon className="size-7 opacity-75" />
            )}
            <span>{!key ? "Withdrawal" : "Transaction History"}</span>
          </div>
        ))}
    </div>
  );
};
