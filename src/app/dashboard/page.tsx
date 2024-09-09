"use client";
import Image from "next/image";
import React from "react";
import HomeCard from "../components/dashboard/home-card";
import DoctorCard from "../components/dashboard/doctor-card";
import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className=" my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex justify-between w-full">
          <div className="flex">
            {/* Logo */}
            <div className="h-[6.676vh] w-[6.676vh] bg-white rounded-lg flex justify-center items-center">
              <Image
                src={"/assets/images/logo-eye.png"}
                alt={"logo"}
                height={20}
                width={40}
              />
            </div>

            {/* Name */}
            <div className="flex flex-col ml-[4.132vw] justify-center">
              <p className="font-bold text-lg">Hi {"Kithmina,"}</p>
              <p className="ftext-lg">Welcome Back!</p>
            </div>
          </div>

          {/* Profile */}
          <div className="h-[6.676vh] w-[6.676vh] flex justify-center items-center">
            <Image
              src={"/assets/images/profile-icon.png"}
              alt={"logo"}
              height={48}
              width={48}
            />
          </div>
        </div>

        {/* Body */}
        <div className="mt-[2.782vh] flex flex-col gap-[2.086vh]">
          <HomeCard
            imageUrl={"/assets/images/report-bg.png"}
            text={"My Report Results"}
            onClick={() => router.replace("/reports")}
          />
          <HomeCard
            imageUrl={"/assets/images/history-bg.png"}
            text={"My Medical History"}
            onClick={() => {}}
          />
          <HomeCard
            imageUrl={"/assets/images/doctor-bg.png"}
            text={"View All Doctors"}
            onClick={() => router.replace("/doctors")}
          />
        </div>

        {/* Footer */}
        <div className="mt-[2.782vh] flex flex-col">
          <div className="flex items-center justify-between">
            <p className="font-bold text-[16px]">Suggested Doctors</p>
            <button
              className="bg-transparent text-grayText rounded-lg px-[3.75vw] py-[1.25vh]
          flex justify-center items-center"
            >
              <p className="mr-2 text-sm">See all</p>
              <Image
                src={"/assets/icons/right-arrow.png"}
                alt={"logo"}
                height={10}
                width={6}
              />
            </button>
          </div>

          {/* Doctor Cards */}
          <div className="flex gap-[3.053vw]">
            <DoctorCard
              imageUrl={"/assets/images/doc.png"}
              name={"Stephanie"}
              price={"2500.00"}
            />
            <DoctorCard
              imageUrl={"/assets/images/doc.png"}
              name={"Stephanie"}
              price={"2500.00"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
