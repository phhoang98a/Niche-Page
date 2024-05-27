import React from "react";
import Logo from "./Logo";
import Link from 'next/link'

export default function Footer() {

  return (
    <div className="py-5 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(180deg, #070911 0%, rgba(21, 24, 54, 0) 208.74%)" }}>
      <div className="mb-3" style={{
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px"
      }}>
        <div>
        <Link href="/privacy-policy" className="underline underline-offset-1">Privacy Policy</Link> | Contact: <span className="underline underline-offset-1">contact@nichetensor.com</span>
        </div>
        <div>
          © 2024 by NicheTensor. All rights reserved.
        </div>
      </div>
      <Logo />
    </div>
  );
}
