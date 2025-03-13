import React from "react";

function Header({ text }) {
  return (
    <>
      <div className="h-4 w-full bg-white/60"></div>
      <div className="bg-white font-jose-regular text-lg text-center py-5">
        {text}
      </div>
    </>
  );
}

export default Header;
