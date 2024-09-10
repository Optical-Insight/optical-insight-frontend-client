import React from "react";
import Image from "next/image";

function ReportHeader() {
  return (
    <div className="w-full h-[87px] bg-blueBg flex flex-auto px-2 justify-between">
      <div className="flex flex-col text-white justify-center gap-1">
        <p className="text-[8.64px]">Vision Care Optical Services</p>
        <p className="text-[14.63px] font-bold">VC19200 - TEST RESULTS</p>
        <p className="text-[6.8px]">
          Result Released Date & Time : 2024.05.02 | 15:03 P.M.
        </p>
      </div>
      <div className="flex justify-center text-center">
        <Image
          src={"/assets/logo/vissionCareLogo.svg"}
          alt={"logo"}
          height={26.07}
          width={44}
        />
      </div>
    </div>
  );
}

export default ReportHeader;
