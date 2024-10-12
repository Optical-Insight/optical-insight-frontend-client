import Image from "next/image";
import { DoctorCardProps } from "@/utils/doctor";

const DoctorCard = ({ imageUrl, name, price }: DoctorCardProps) => {
  return (
    <div className="rounded-lg bg-white min-w-[28vw] pt-1">
      <div className="mt-[1.113vh] flex justify-center ">
        <Image src={imageUrl} alt="profile picture" height={54} width={54} />
      </div>
      <div className="mt-[1.391vh] flex flex-col items-center mb-[1.3vh]">
        <p className="font-bold text-[14px]">Dr. {name}</p>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-[13px] text-greenText mt-[3px] mb-[-3px]">
            LKR {price}
          </p>
          <p className="text-[10px]">per appoinment</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
