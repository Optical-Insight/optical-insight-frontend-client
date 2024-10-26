"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Flex, Spin } from "antd";
import { GET_USER_BY_ID_URL } from "@/constants/config";
import { useAuth } from "@/context/AuthContext";
import BackButton from "@/app/components/common/btn-back";
import CommonBtn from "@/app/components/common/button";
import axios from "axios";

function PatientComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reportId = searchParams.get("reportId");
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
      console.error("reportId:", reportId, "storedAuthData:", storedAuthData);
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
          <BackButton onClick={() => router.replace("/reports")} />
          <p className="ml-[4.071vw] font-bold text-lg">Profile Details</p>
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center mt-[6vh]">
            <Flex align="center" gap="middle">
              <Spin />
            </Flex>
          </div>
        ) : (
          <div className="mt-[4.451vh]">
            {/* Body */}
            <div className="px-[3.817vw] py-[2.086vh] rounded-lg bg-white flex flex-col gap-[1.4vh] ">
              {profile ? (
                <div
                  key={profile.userId}
                  className="flex flex-row gap-4 text-sm"
                >
                  <div>
                    <p className="mb-1">Profile ID:</p>
                    <p className="mb-1">Patient Name:</p>
                    <p className="mb-1">Created By:</p>
                    <p className="mb-1">Created Date:</p>
                    <p className="mb-1">Created Time:</p>
                    <p className="mb-1">Status:</p>
                  </div>
                  <div className="font-semibold">
                    <p className="mb-1">{profile.reportId}</p>
                    <p className="mb-1">{profile.patientId}</p>
                    <p className="mb-1">{profile.createdBy}</p>
                    <p className="mb-1">
                      {new Date(profile.createdAt).toLocaleDateString()}
                    </p>
                    <p className="mb-1">
                      {new Date(profile.createdAt).toLocaleTimeString()}
                    </p>
                    <p className="mb-1 text-green-700">
                      {profile.status.charAt(0).toUpperCase() +
                        profile.status.slice(1)}
                    </p>
                  </div>
                </div>
              ) : (
                <p>No profile found.</p>
              )}
            </div>

            {/* Open AI */}
            <div className="mt-[3.5vh] px-[3.817vw] py-[2.086vh] rounded-lg bg-white flex flex-col gap-[1.4vh] ">
              {profile ? (
                <div key={profile.reportId} className="mb-2 flex flex-col">
                  <p className="font-semibold mb-2">Suggestions:</p>
                  <ul className="list-disc pl-5">
                    {profile.openAiRecommendation.map((suggestion: string) => (
                      <li key={suggestion} className="text-sm mb-1">
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No profile found.</p>
              )}
            </div>

            {/* View Profile PDF */}
            <div className="mt-[3.5vh]">
              {profile && (
                <div className="h-[6.074vh]">
                  <CommonBtn
                    label="View Profile"
                    onClick={() => {}}
                    isLoading={isLoading}
                    // isBtnDisabled={profile.status === "pending"}
                    type="Primary"
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
