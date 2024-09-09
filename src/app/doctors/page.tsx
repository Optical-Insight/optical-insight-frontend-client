"use client";
// import Image from "next/image";
import React from "react";
// import HomeCard from "../components/dashboard/home-card";
// import DoctorCard from "../components/dashboard/doctor-card";
import BackButton from "../components/common/btn-back";
import DoctorsPageCard from "../components/doctors/home-card";

function DoctorsPage() {
  const handleBackBtnClicked = () => {
    // setStep(1);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex items-center">
          <BackButton onClick={handleBackBtnClicked} />
          <p className="ml-[4.071vw] font-bold text-lg">Available Doctors</p>
        </div>

        {/* Search Bar */}
        <div className="mt-[4.451vh] flex justify-center items-center">
          <input
            type="search"
            className="pl-1 h-[7.555vh] w-full rounded-lg text-sm text-black"
            placeholder={"Search for a doctor"}
          />
        </div>

        {/* Body */}
        <div className="mt-[3.338vh] flex flex-col gap-[1.4vh]">
          <DoctorsPageCard
            imageUrl="/assets/images/doctor-1.png"
            name="Crick"
            specialty="Cardiologist"
            experience="5 years"
            rating="4.8"
          />
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
