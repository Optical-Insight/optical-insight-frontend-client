"use client";
import React, { useEffect, useState } from "react";
import BackButton from "../components/common/btn-back";
import DoctorsPageCard from "../components/doctors/all-doctor-card";
import { useRouter } from "next/navigation";
// import { GET_ALL_USERS_BY_TYPE_URL } from "@/constants/config";
// import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { DoctorsAllProps } from "@/utils/doctor";
import { useDoctors } from "@/context/DoctorsContext";

function DoctorsPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // const [doctors, setDoctors] = useState<DoctorsAllProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { doctors, fetchAllDoctors } = useDoctors();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const fetchAllDoctors = async () => {
  //   try {
  //     const response = await axios.get(GET_ALL_USERS_BY_TYPE_URL, {
  //       headers: {
  //         Authorization: `Bearer ${storedAuthData.accessToken}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     setDoctors(response.data);
  //     console.log("Doctors data", response.data);
  //   } catch (err: any) {
  //     console.error(
  //       "Error in retrieving data",
  //       err.response?.data || err.message
  //     );
  //   }
  // };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllDoctors();
    }
  }, [isAuthenticated]);

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
            placeholder="Search for a doctor"
            onChange={handleSearchChange}
          />
        </div>

        {/* Body */}
        <div className="mt-[3.338vh] flex flex-col gap-[1.4vh] max-h-[68.567vh] overflow-y-auto rounded-lg">
          {filteredDoctors.map((doctor: DoctorsAllProps) => (
            <DoctorsPageCard
              key={doctor.userId}
              imageUrl={"/assets/images/blank-profile-picture.png"}
              name={doctor.name}
              specialty={doctor.specialization}
              experience={`${doctor.experience} years experience`}
              rating={doctor.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
