"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Flex, Spin } from "antd";
import { GET_USER_BY_ID_URL } from "@/constants/config";
import { useAuth } from "@/context/AuthContext";
import BackButton from "@/app/components/common/btn-back";
import CommonBtn from "@/app/components/common/button";
import axios from "axios";

function PatientComponent() {
  const router = useRouter();
  const { storedAuthData } = useAuth();

  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserDetails = async () => {
    if (!storedAuthData) {
      console.error("authorization data is missing");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `${GET_USER_BY_ID_URL}${storedAuthData.userId}`,
        {
          headers: {
            Authorization: `Bearer ${storedAuthData.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Profile data:", response.data);
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile details", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [storedAuthData]);

  return (
    <div className="w-screen min-h-screen h-full flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex items-center">
          <BackButton onClick={() => router.replace("/dashboard")} />
          <p className="ml-[4.071vw] font-bold text-lg">Profile Details</p>
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center mt-[6vh]">
            <Flex align="center" gap="middle">
              <Spin />
            </Flex>
          </div>
        ) : (
          <div className="mt-[5vh]">
            {/* Body */}
            <div className="px-[3.817vw] py-[2.086vh] rounded-lg bg-white flex flex-col gap-[1.4vh] ">
              {profile ? (
                <div key={profile.userId}>
                  <div className="grid span w-full text-[12px]">
                    {profile.userId && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Patient ID:</p>
                        <p className="mb-1 font-semibold">{profile.userId}</p>
                      </span>
                    )}
                    {profile.name && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Name:</p>
                        <p className="mb-1 font-semibold  w-[120px]">
                          {profile.name}
                        </p>
                      </span>
                    )}
                    {profile.email && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Email:</p>
                        <p className="mb-1 font-semibold  w-[120px]">
                          {profile.email}
                        </p>
                      </span>
                    )}
                    {profile.phone && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Phone No:</p>
                        <p className="mb-1 font-semibold">{profile.phone}</p>
                      </span>
                    )}
                    <br />
                    {profile.weight && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Weight:</p>
                        <p className="mb-1 font-semibold">{profile.weight}</p>
                      </span>
                    )}
                    {profile.height && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Height:</p>
                        <p className="mb-1 font-semibold">{profile.height}</p>
                      </span>
                    )}
                    {profile.age && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Age:</p>
                        <p className="mb-1 font-semibold">{profile.age}</p>
                      </span>
                    )}
                    {profile.dateOfBirth && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[80px]">Date Of Birth:</p>
                        <p className="mb-1 font-semibold">
                          {profile.dateOfBirth}
                        </p>
                      </span>
                    )}
                    <br />
                    {profile.currentMedications && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[120px]">Current Medications:</p>
                        <p className="mb-1 w-[120px] font-semibold">
                          {profile.currentMedications}
                        </p>
                      </span>
                    )}
                    <br />
                    {profile.eyeDiscomfort && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[120px]">Eye Discomfort:</p>
                        <p className="mb-1 w-[120px] font-semibold">
                          {profile.eyeDiscomfort}
                        </p>
                      </span>
                    )}
                    <br />
                    {profile.historyOfSmokingAndAlcoholConsumption && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[120px]">
                          History Of Smoking And Alcohol Consumption:
                        </p>
                        <p className="mb-1 font-semibold w-[120px]">
                          {profile.historyOfSmokingAndAlcoholConsumption}
                        </p>
                      </span>
                    )}
                    <br />
                    {profile.generalMedicalHistory && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[120px]">
                          General Medical History:
                        </p>
                        <p className="mb-1 font-semibold w-[120px]">
                          {profile.generalMedicalHistory}
                        </p>
                      </span>
                    )}
                    <br />
                    {profile.glassesOrContactLenseUsage && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[120px]">
                          Glasses Or Contact Lense Usage:
                        </p>
                        <p className="mb-1 font-semibold w-[120px]">
                          {profile.glassesOrContactLenseUsage}
                        </p>
                      </span>
                    )}
                    <br />
                    {profile.pastEyeProblemsOrSurgeries && (
                      <span className="flex flex-row justify-start items-center gap-7">
                        <p className="mb-1 w-[120px]">
                          Past Eye Problems Or Surgeries:
                        </p>
                        <p className="mb-1 font-semibold w-[120px]">
                          {profile.pastEyeProblemsOrSurgeries}
                        </p>
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <p>No profile found.</p>
              )}
            </div>

            {/* Delete Profile */}
            <div className="mt-[3.5vh]">
              {profile && (
                <div className="h-[6.074vh]">
                  <CommonBtn
                    label="Delete my Profile"
                    onClick={() => {}}
                    isLoading={isLoading}
                    // isBtnDisabled={profile.status === "pending"}
                    type="Delete"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientComponent;
