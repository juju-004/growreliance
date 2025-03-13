import React from "react";
import Header from "../components/header";

function Transactions() {
  const dummyData = [
    {
      title: "Transfer to John Mark",
      amount: "3000",
      status: "Successful",
      date: "Aug 19th. 13:34:03",
    },
    {
      title: "Transfer to John Mark",
      amount: "2000",
      status: "Pending",
      date: "Aug 19th. 13:34:03",
    },
    {
      title: "Transfer to John Mark",
      amount: "2000",
      status: "Failed",
      date: "Aug 19th. 13:34:03",
    },
  ];

  return (
    <div className="bg-c3 min-h-screen ">
      <Header text={"Transaction History"} />
      <div className="pt-4 px-5">
        <ul className="list">
          {dummyData.map((d, key) => {
            let className = "text-yellow-400 bg-yellow-300/25";
            if (d.status === "Failed") className = "text-red-600 bg-red-300/25";
            if (d.status === "Successful")
              className = "text-green-600 bg-green-300/25";

            return (
              <li
                key={key}
                className="list-row bg-white mt-4 flex justify-between py-5 !rounded-none"
              >
                <div>
                  <h2 className="font-jose-regular text-lg">{d.title}</h2>
                  <span className="opacity-70">{d.date}</span>
                </div>
                <div className="fx w-20 flex-col">
                  <span
                    className={`${d.status === "Successful" ? "text-c2" : ""}`}
                  >
                    {d.amount}
                  </span>
                  <span className={`px-2 ${className}`}>{d.status}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Transactions;
