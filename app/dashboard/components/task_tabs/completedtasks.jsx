"use client";

import React, { useEffect, useState } from "react";

function Completedtasks() {
  const [data, setData] = useState([]);

  const getData = () => {
    if (data.length === 0) {
      // get the data

      let dummydata = [
        {
          title: "Market Survey - Patani",
          submittedDate: "21st Monday",
          status: "Approved",
        },
        {
          title: "Farm Survey - Warri",
          submittedDate: "22nd Monday",
          status: "Pending",
        },
        {
          title: "Market Survey - Ughelli",
          submittedDate: "23rd Monday",
          status: "Declined",
        },
      ];

      setTimeout(() => {
        setData(dummydata);
      }, 3000);
    }
  };

  useEffect(getData, [data]);

  return (
    <ul
      className="list bg-c3 min-h-[calc(100vh-250px)]
     rounded-box"
    >
      {data.length === 0 ? (
        <div className="flex w-full flex-col gap-4 mt-3">
          <div className="skeleton h-18 bg-c2/10 w-full"></div>
          <div className="skeleton h-18 bg-c2/10 w-full"></div>
        </div>
      ) : (
        data.map((d, key) => {
          let color = "text-red-500";

          if (d.status === "Approved") color = "text-green-500";
          else if (d.status === "Pending") color = "text-yellow-500";

          return (
            <li
              key={key}
              className="list-row justify-between shadow-md flex items-center bg-white mt-3 !py-5"
            >
              <div>
                <h3 className="font-semibold">{d.title}</h3>
                <div className="">
                  <span className="opacity-60">Submitted on</span>{" "}
                  <span className="text-c1 font-semibold">
                    {d.submittedDate}
                  </span>
                </div>
              </div>

              <div className={`w-20 text-center  ${color}`}>{d.status}</div>
            </li>
          );
        })
      )}
    </ul>
  );
}

export default Completedtasks;
