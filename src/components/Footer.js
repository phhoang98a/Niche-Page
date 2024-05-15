import React from "react";
import Logo from "./Logo";

export default function Footer() {

  return (
    <div className="py-5 flex flex-col items-center justify-center text-center" style={{background: "linear-gradient(180deg, #070911 0%, rgba(21, 24, 54, 0) 208.74%)"}}>
      <div className="mb-3" style={{
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px"
      }}>
        © 2024 by GoAPI. All rights reserved.
      </div>
      <Logo/>
    </div>
  );
}
