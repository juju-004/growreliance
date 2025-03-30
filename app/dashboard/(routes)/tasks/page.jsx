"use client";

import React from "react";
import Assigntasks from "./components/assigntasks";
import Tracktasks from "./components/tracktasks";
import Completedtasks from "./components/completedtasks";

function Tasks() {
  const tabs = [
    { title: "Assign Tasks", content: <Assigntasks /> },
    { title: "Track Tasks", content: <Tracktasks /> },
    { title: "Completed Tasks", content: <Completedtasks /> },
  ];

  return (
    <div className="tabs tabs-border px-2 pt-4">
      {tabs.map((tab, key) => (
        <React.Fragment key={key}>
          <input
            type="radio"
            name="my_tabs_2"
            className={`tab `}
            aria-label={tab.title}
            defaultChecked={!key ? true : false}
          />
          <div className="tab-content scroller overflow-y-hidden md:overflow-y-scroll pb-12 md:pb-6 !h-[calc(100vh-130px)] md:!h-[calc(100vh-137px)] w-full border-t-2 border-t-c2 pt-3">
            <div className="w-full bg-c3 md:rounded-2xl p-3 h-full">
              {tab.content}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Tasks;
