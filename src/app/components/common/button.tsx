"use client";
import React from "react";
import { CommonBtnProps } from "@/utils/interfaces";

const CommonBtn = ({ label, onClick, type }: CommonBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-full text-buttonText text-sm md:text-base rounded-[7px] px-[15px]
        ${type === "Delete" ? "bg-btnDanger" : "bg-buttonPrimary"}  
        ${(label === "Next" || label === "Submit") && "w-full"}

        `}
    >
      {label}
    </button>
  );
};

export default CommonBtn;
