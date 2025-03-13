"use client";

import React from "react";
import Dock from "./components/dock";
import Nav from "./components/nav";
import { Firstmenu, Secondmenu } from "./components/menu";
import Tasks from "./components/tasks";

function Dashboard() {
  return (
    <section className=" bg-c3">
      <section className="min-h-screen max-w-5xl mx-auto md:flex md:items-start md:gap-4  bg-c3">
        <div className="md:w-[300px] md:shadow-xl md:relative md:overflow-hidden md:mt-8 md:flex md:flex-col md:bg-white md:rounded-4xl">
          <Nav />
          <Firstmenu />
          <Secondmenu />
        </div>
        <div className="md:flex-1 md:relative">
          <Tasks />
          <Dock />
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
