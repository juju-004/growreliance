import React from "react";
import Header from "../components/header";

function Withdraw() {
  return (
    <div className="bg-c3 min-h-screen md:min-h-0 ">
      <Header text={"Withdraw"} />
      <div className=" overflow-y-hidden md:overflow-y-scroll md:!h-[calc(100vh-165px)] pb-20 md:pb-6 w-full">
        <div className="py-5 px-4">
          <div className="bg-white px-5 py-3">
            <h2 className="text-xl font-semibold mb-2">Withdraw via bank</h2>
            <span>
              Send money from your portfolio balance to your merchant bank
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
