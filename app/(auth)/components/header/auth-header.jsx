import React from "react";

function AuthHeader({ text, subText }) {
  return (
    <header className="bg-c1 text-white pl-6 pt-20 pb-10 ">
      <h3 className="text-4xl">{text}</h3>
      <span className="opacity-75 text-lg">{subText}</span>
    </header>
  );
}

export default AuthHeader;
