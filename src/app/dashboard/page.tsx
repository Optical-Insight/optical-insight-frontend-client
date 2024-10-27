"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HomeCard from "../components/dashboard/home-card";
import DoctorCard from "../components/dashboard/doctor-card";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useAuth } from "@/context/AuthContext";
import ModalConfirm from "../components/common/modal-confirm";
import { useDoctors } from "@/context/DoctorsContext";
import { DoctorsAllProps } from "@/utils/doctor";

function HomePage() {
  const router = useRouter();
  const { isAuthenticated, logout, userData } = useAuth();
  const { doctors, fetchAllDoctors } = useDoctors();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const diseases = "glaucoma";

  // const filteredDoctors = doctors.filter((doctor) =>
  //   doctor.specialization.toLowerCase().includes(diseases.toLowerCase())
  // );

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllDoctors();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsModalVisible(true);
  };

  const confirmLogout = () => {
    setIsModalVisible(false);
    logout();
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="font-semibold"
          onClick={() => router.replace("/profile")}
        >
          Profile
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-semibold text-red-600" onClick={handleLogout}>
          Logout
        </div>
      ),
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className=" my-[3vh] mx-[7.125vw]">
        <div className="flex justify-center mt-4 bg-greenBlueBg rounded-xl py-4">
          <Image
            src={"/assets/images/logo-dark.png"}
            alt={"logo"}
            height={40}
            width={150}
          />
        </div>

        {/* Header */}
        <div className="flex justify-between w-full mt-6">
          <div className="flex ">
            {/* Logo */}
            {/* <div className="h-[6.676vh] w-[6.676vh] bg-white rounded-lg flex justify-center items-center">
              <Image
                src={"/assets/images/logo-eye.png"}
                alt={"logo"}
                height={20}
                width={40}
              />
            </div> */}

            {/* Name */}
            <div className="flex flex-col ml-[1vw] justify-center">
              <p className="font-bold text-lg">
                Hi {userData?.name.split(" ")[0]},
              </p>
              <p className="ftext-lg">Welcome Back!</p>
            </div>
          </div>

          {/* Profile */}
          <div className="h-[7vh] w-[7vh] border-r-[50%] flex justify-center items-center cursor-pointer">
            <Dropdown menu={{ items }} placement="bottomRight">
              <Image
                src={"/assets/images/empty-profile.png"}
                alt={"logo"}
                height={50}
                width={50}
              />
            </Dropdown>
          </div>
        </div>

        {/* Body */}
        <div className="mt-[2.782vh] flex flex-col gap-[2.086vh]">
          <HomeCard
            imageUrl={"/assets/images/report-bg.png"}
            text={"My Report Results"}
            onClick={() => router.replace("/reports")}
          />
          {/* <HomeCard
            imageUrl={"/assets/images/history-bg.png"}
            text={"My Medical History"}
            onClick={() => {}}
          /> */}
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
          flex justify-center items-center mt-4"
            >
              {/* <p className="mr-2 text-sm">See all</p>
              <Image
                src={"/assets/icons/right-arrow.png"}
                alt={"logo"}
                height={10}
                width={6}
              /> */}
            </button>
          </div>

          <div className="flex mt-2 gap-[3.053vw] overflow-x-auto whitespace-nowrap">
            {doctors.slice().map((doctor: DoctorsAllProps) => (
              <DoctorCard
                key={doctor.userId}
                imageUrl={"/assets/images/blank-profile-picture.png"}
                name={doctor.name.split(" ")[0]}
                specialization={doctor.specialization}
                price={doctor.fees}
              />
            ))}
          </div>
        </div>
      </div>

      <ModalConfirm
        title="Logout Confirmation"
        message="Are you sure you want to logout?"
        confirmLabel="Logout"
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmLogout}
      />
    </div>
  );
}
424433;
export default HomePage;
