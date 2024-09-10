"use client";
import React from "react";
import type { IconBtn } from "@/utils/interfaces"; // Updated import

const IconBtn = ({ icon, label, onClick, type }: IconBtn) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-full text-buttonText text-sm md:text-base rounded-[7px] px-[15px] flex flex-row py-3 gap-1 text-center justify-center text-[12px]
        ${type === "Delete" ? "bg-btnDanger" : "bg-buttonPrimary"}  
        ${label === "Next" || label === "Submit"}
        `}
    >
      <p className="mt-1">{icon}</p>
      <p>{label}</p>
    </button>
  );
};

export default IconBtn;
