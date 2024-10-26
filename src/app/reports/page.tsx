"use client";
import React, { useEffect, useState } from "react";
import BackButton from "../components/common/btn-back";
import ReportListCard from "../components/reports/report-list-card";
import { useRouter } from "next/navigation";
import { GET_REPORTS_BY_USER_ID } from "@/constants/config";
import { ReportListAllProps } from "@/utils/report";
import { useAuth } from "@/context/AuthContext";
import { Flex, Spin } from "antd";
import axios from "axios";

function ReportsListPage() {
  const router = useRouter();
  const { storedAuthData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState<ReportListAllProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardClick = (reportId: string) => {
    router.push(`/reports/reportDetails?reportId=${reportId}`);
  };

  const fetchAllReports = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(GET_REPORTS_BY_USER_ID, {
        headers: {
          Authorization: `Bearer ${storedAuthData.accessToken}`,
          "Content-Type": "application/json",
        },
      });

      setRows(response.data);
    } catch (err: any) {
      console.error(
        "Error in retrieving data",
        err.response?.data || err.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (storedAuthData) fetchAllReports();
  }, [storedAuthData]);

  const filteredRows = rows.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex items-center">
          <BackButton onClick={() => router.replace("/dashboard")} />
          <p className="ml-[4.071vw] font-bold text-lg">My Report Results</p>
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center mt-[6vh]">
            <Flex align="center" gap="middle">
              <Spin />
            </Flex>
          </div>
        ) : (
          <>
            {/* Search Bar */}
            <div className="mt-[4.451vh] flex justify-center items-center">
              <input
                type="search"
                className="pl-1 h-[6.12vh] w-full rounded-lg text-sm text-black"
                placeholder="Search for a report"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Body */}
            <div className="mt-[3.338vh] flex flex-col gap-[1.4vh]">
              {filteredRows.map((report) => (
                <ReportListCard
                  key={report.reportId}
                  reportId={report.reportId}
                  createdBy={report.createdBy}
                  createdAt={report.createdAt}
                  status={report.status}
                  onClick={() => handleCardClick(report.reportId)}
                />
              ))}
              {!isLoading && filteredRows.length === 0 && (
                <p>No reports found.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReportsListPage;
