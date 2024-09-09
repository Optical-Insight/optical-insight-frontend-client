"use client";
import React from "react";
import BackButton from "../components/common/btn-back";
import DoctorsPageCard from "../components/doctors/all-doctor-card";
import { useRouter } from "next/navigation";

function DoctorsPage() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex items-center">
          <BackButton onClick={() => router.replace("/dashboard")} />
          <p className="ml-[4.071vw] font-bold text-lg">Available Doctors</p>
        </div>

        {/* Search Bar */}
        <div className="mt-[4.451vh] flex justify-center items-center">
          <input
            type="search"
            className="pl-1 h-[6.12vh] w-full rounded-lg text-sm text-black"
            placeholder={"Search for a doctor"}
          />
        </div>

        {/* Body */}
        <div className="mt-[3.338vh] flex flex-col gap-[1.4vh]">
          <DoctorsPageCard
            imageUrl="/assets/images/doc-dp.png"
            name="Dr. Jennifer"
            specialty="Eye Specialist - Drusen"
            experience="5 years experience"
            rating="4.8"
          />
          <DoctorsPageCard
            imageUrl="/assets/images/doc-dp.png"
            name="Dr. Jennifer"
            specialty="Eye Specialist - Glaucoma"
            experience="5 years experience"
            rating="4.8"
          />
          <DoctorsPageCard
            imageUrl="/assets/images/doc-dp.png"
            name="Dr. Jennifer"
            specialty="Eye Specialist - Macular Hole"
            experience="5 years experience"
            rating="4.8"
          />
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
