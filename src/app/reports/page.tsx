"use client";
import React from "react";
import BackButton from "../components/common/btn-back";
import { useRouter } from "next/navigation";
import ReportListCard from "../components/reports/report-list-card";

function ReportsListPage() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex items-center">
          <BackButton onClick={() => router.replace("/dashboard")} />
          <p className="ml-[4.071vw] font-bold text-lg">My Report Results</p>
        </div>

        {/* Search Bar */}
        <div className="mt-[4.451vh] flex justify-center items-center">
          <input
            type="search"
            className="pl-1 h-[6.12vh] w-full rounded-lg text-sm text-black"
            placeholder={"Search for a report"}
          />
        </div>

        {/* Body */}
        <div className="mt-[3.338vh] flex flex-col gap-[1.4vh]">
          <ReportListCard
            name="Eye Checkup - 06.09.2024"
            docName="Dr.Jenifer Perera"
            timestamp="06.09.2024 - 10:30 AM"
          />
          <ReportListCard
            name="Eye Checkup - 03.09.2024"
            docName="Dr.Shehan Samaradiwakara"
            timestamp="03.09.2024 - 09:42 AM"
          />
          <ReportListCard
            name="Eye Checkup - 30.08.2024"
            docName="Dr.Malcom Merlin"
            timestamp="30.08.2024 - 01.26 PM"
          />
        </div>
      </div>
    </div>
  );
}

export default ReportsListPage;
