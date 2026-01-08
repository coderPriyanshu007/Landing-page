"use client";
import { useState } from "react";

export default function({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        
        border-b border-white/10

        pb-4
       
        shadow-[0_10px_10px_rgba(0,0,0,0.10)]
        shadow-[0_4px_4px_rgba(0,0,0,0.05)]
      "
    >
      
      <button
        onClick={() => setOpen(!open)}
        className="
          flex w-full items-center justify-between
          px-5 py-4
          text-left text-white  text-base md:text-lg
        "
      >
        <h2 className="md:text-xl">{title}</h2>
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={`overflow-hidden  px-5 text-white/80 text-sm md:text-lg`}>
          {children}
        </div>
      </div>
    </div>
  );
}
