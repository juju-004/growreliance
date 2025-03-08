"use client";

import React, { useEffect, useState } from "react";

function Assigntasks() {
  const [data, setData] = useState([]);

  const getData = () => {
    if (data.length === 0) {
      // get the data

      let dummydata = [
        { title: "Market Survey - Patani", completionDate: "21st Monday" },
        { title: "Farm Survey - Warri", completionDate: "22nd Monday" },
        { title: "Market Survey - Ughelli", completionDate: "23rd Monday" },
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
        data.map((d, key) => (
          <li
            key={key}
            className="list-row !py-5 shadow-md justify-between flex items-center bg-white mt-3"
          >
            <div>
              <h3 className="font-semibold">{d.title}</h3>
              <div className="">
                <span className="opacity-60">
                  Task must be completed on or before
                </span>{" "}
                <span className="text-c1 font-semibold">
                  {d.completionDate}
                </span>
              </div>
            </div>

            <button className="btn bg-c2 w-20 btn-ghost !rounded-sm text-white px-2">
              Details
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default Assigntasks;
