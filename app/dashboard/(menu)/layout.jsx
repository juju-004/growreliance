"use client";

import React from "react";
import Nav from "../components/nav";
import { Firstmenu, Secondmenu } from "../components/menu";
import Dock from "../components/dock";

function Layout({ children }) {
  return (
    <section className=" bg-c3">
      <section className="min-h-screen max-w-5xl md:px-6 mx-auto md:flex md:items-start md:gap-4  bg-c3">
        <div className="md:w-[300px] hidden md:shadow-xl md:relative md:overflow-hidden md:mt-8 md:flex md:flex-col md:bg-white md:rounded-4xl">
          <Nav />
          <Firstmenu />
          <Secondmenu />
        </div>
        <div className="md:flex-1 md:relative">
          <div className="bg-white md:shadow-xl overflow-hidden md:px-2 md:mt-20  md:rounded-t-[50px] w-full">
            {children}
          </div>
          <Dock className={"hidden md:flex"} />
        </div>
      </section>
    </section>
  );
}

export default Layout;
