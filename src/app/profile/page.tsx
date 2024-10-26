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
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
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
                <div
                  key={profile.userId}
                  className="flex flex-row gap-4 text-sm"
                >
                  <div>
                    <p className="mb-1">Patient ID:</p>
                    <p className="mb-1">Name:</p>
                    <p className="mb-1">Email:</p>
                    <p className="mb-1">Phone No:</p>
                    <br />
                    <p className="mb-1">Patient ID:</p>
                    <p className="mb-1">Name:</p>
                    <p className="mb-1">Email:</p>
                    <p className="mb-1">Phone No:</p>
                    <br />
                    <p className="mb-1">Patient ID:</p>
                    <p className="mb-1">Name:</p>
                    <p className="mb-1">Email:</p>
                    <p className="mb-1">Phone No:</p>
                    {/* <p className="mb-1">Created Time:</p>
                    <p className="mb-1">Status:</p> */}
                  </div>
                  <div className="font-semibold">
                    <p className="mb-1">{profile.userId}</p>
                    <p className="mb-1">{profile.name}</p>
                    <p className="mb-1">{profile.email}</p>
                    <p className="mb-1">{profile.phone}</p>
                    {/* <p className="mb-1">
                      {new Date(profile.createdAt).toLocaleDateString()}
                    </p>
                    <p className="mb-1">
                      {new Date(profile.createdAt).toLocaleTimeString()}
                    </p>
                    <p className="mb-1 text-green-700">
                      {profile.status.charAt(0).toUpperCase() +
                        profile.status.slice(1)}
                    </p> */}
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
