"use client";
import React, { useEffect, useState } from "react";
import BackButton from "../components/common/btn-back";
import DoctorsPageCard from "../components/doctors/all-doctor-card";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { DoctorsAllProps } from "@/utils/doctor";
import { useDoctors } from "@/context/DoctorsContext";

function DoctorsPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { doctors, fetchAllDoctors } = useDoctors();

  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSpecialtyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSpecialty(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearchTerm =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      specialty === "Filter by Specialty" ||
      specialty === "" ||
      doctor.specialization.toLowerCase().includes(specialty.toLowerCase());

    return matchesSearchTerm && matchesSpecialty;
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllDoctors();
    }
  }, [isAuthenticated]);

  const specializations = [
    { value: "", label: "Filter by Specialty" },
    { value: "Glaucoma", label: "Glaucoma" },
    { value: "Drusen", label: "Drusen" },
    { value: "Macular Hole", label: "Macular Hole" },
    { value: "CSR", label: "CSR" },
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex items-center">
          <BackButton onClick={() => router.replace("/dashboard")} />
          <p className="ml-[4.071vw] font-bold text-lg">Available Doctors</p>
        </div>

        <div className="mt-[4.451vh] flex justify-center items-center gap-3">
          {/* Search Bar */}
          <input
            type="search"
            className="pl-1 h-[6.12vh] w-7/12 rounded-lg text-sm text-black"
            placeholder="Search for a doctor"
            onChange={handleSearchChange}
          />

          {/* Select by specialty */}
          <select
            className="pl-1 h-[6.12vh] w-5/12 rounded-lg text-sm text-black"
            value={specialty}
            onChange={handleSpecialtyChange} // Correct onChange event
          >
            {specializations.map((specialization) => (
              <option key={specialization.value} value={specialization.value}>
                {specialization.label}
              </option>
            ))}
          </select>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
