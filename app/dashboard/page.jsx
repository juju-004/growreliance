"use client";

import React from "react";
import Dock from "./components/dock";
import Nav from "./components/nav";
import { Firstmenu, Secondmenu } from "./components/menu";
import Tasks from "./components/tasks";

function Dashboard() {
  return (
    <section className="min-h-screen bg-c3">
      <Nav />
      <Firstmenu />
      <Secondmenu />
      <Tasks />
      <Dock />
    </section>
  );
}

export default Dashboard;
