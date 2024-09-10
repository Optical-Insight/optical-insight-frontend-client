import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { TbWorldLongitude } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";

function ReportFooter() {
  return (
    <div className="w-full h-[18.12px] bg-blueBg flex flex-auto p-2 justify-between text-[5.21px] mt-5">
      <div className="flex flex-row text-white justify-center gap-1">
        <IoLocationSharp /> 1st Floor, 907 Peradeniya Rd, Kandy
      </div>
      <div className="flex flex-row text-white justify-center gap-1">
        <TbWorldLongitude /> VissionCare.lk
      </div>{" "}
      <div className="flex flex-row text-white justify-center gap-1">
        <AiOutlineMail /> info@visioncare.lk
      </div>{" "}
      <div className="flex flex-row text-white justify-center gap-1">
        <IoMdCall /> 011 208 5004
      </div>
    </div>
  );
}

export default ReportFooter;
