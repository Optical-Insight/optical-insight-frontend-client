import React from "react";
import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

function ReportPerosnDetails() {
  return (
    <div className="flex flex-auto mt-3 justify-between px-1">
      <div className="h-[42.86px] bg-bluewWhite flex flex-row justify-center gap-2">
        <div className="flex justify-center text-center min-w-[44px]">
          <Image
            src={"/assets/images/qrCode.png"}
            alt={"logo"}
            height={26.07}
            width={44}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-[10.09px] font-bold mt-[2px]">
              Mr Shehan Gunasekara
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-[5.21px] font-bold flex flex-row text-greenText">
              <IoPersonSharp /> Male
            </p>
            <p className="text-[5.21px] font-bold flex flex-row text-greenText">
              <IoLocationSharp /> Kirillawela, Gampaha
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-[5.21px] font-bold flex flex-row text-greenText">
              <MdAlternateEmail />
              shehangune@gmail.com
            </p>
            <p className="text-[5.21px] font-bold flex flex-row text-greenText">
              <IoMdCall />
              K0763689506
            </p>
          </div>
        </div>
      </div>
      <div className="h-[42.86px] bg-bluewWhite flex flex-col justify-center gap-1 ml-3">
        <div>
          <p className="text-[10.09px] font-bold">Lab & Technician Details</p>
        </div>
        <div className="flex flex-row gap-1">
          <p className="text-[5.21px] font-bold flex flex-row text-greenText">
            <IoLocationSharp /> KCC, Kandy
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <p className="text-[5.21px] font-bold flex flex-row text-greenText">
            <IoPersonSharp /> Kithimina Siriwardhana
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportPerosnDetails;
