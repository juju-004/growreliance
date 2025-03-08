"use client";

import React, { useEffect } from "react";
import Assigntasks from "./task_tabs/assign/assigntasks";
import Tracktasks from "./task_tabs/track/tracktasks";
import Completedtasks from "./task_tabs/completedtasks";

function Tasks() {
  const tabs = [
    { title: "Assign Tasks", content: <Assigntasks /> },
    { title: "Track Tasks", content: <Tracktasks /> },
    { title: "Completed Tasks", content: <Completedtasks /> },
  ];

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 213) {
        const elems = document.getElementsByClassName("scroller");
        for (let i = 0; i < elems.length; i++)
          elems[i].classList.replace("overflow-y-hidden", "overflow-y-scroll");
      } else if (
        window.scrollY < 214 &&
        document
          .getElementsByClassName("scroller")[0]
          .classList.contains("overflow-y-scroll")
      ) {
        const elems = document.getElementsByClassName("scroller");
        for (let i = 0; i < elems.length; i++)
          elems[i].classList.replace("overflow-y-scroll", "overflow-y-hidden");
      }
    });
  }, []);

  return (
    <div className="bg-white px-2 rounded-t-[50px] pt-4 w-full">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        {tabs.map((tab, key) => (
          <React.Fragment key={key}>
            <input
              type="radio"
              name="my_tabs_2"
              className={`tab `}
              aria-label={tab.title}
              defaultChecked={!key ? true : false}
            />
            <div className="tab-content scroller overflow-y-hidden !h-[calc(100vh-130px)] pb-20 w-full border-t-2 border-t-c2 pt-3">
              <div className="w-full bg-c3 p-3">{tab.content}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
