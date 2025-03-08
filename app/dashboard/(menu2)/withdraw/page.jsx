import React from "react";
import Header from "../components/header";

function Withdraw() {
  return (
    <div className="bg-c3 min-h-screen ">
      <Header text={"Withdraw"} />
      <div className="py-5 px-4">
        <div className="bg-white px-5 py-3">
          <h2 className="text-xl font-semibold mb-2">Withdraw via bank</h2>
          <span>
            Send money from your portfolio balance to your merchant bank
          </span>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
