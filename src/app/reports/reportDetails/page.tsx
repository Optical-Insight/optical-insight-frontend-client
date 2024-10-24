"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Flex, Spin } from "antd";
import { GET_REPORT_BY_ID } from "@/constants/config";
import { useAuth } from "@/context/AuthContext";
import BackButton from "@/app/components/common/btn-back";
import CommonBtn from "@/app/components/common/button";
import axios from "axios";

function ReportDetailsComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reportId = searchParams.get("reportId");
  const { storedAuthData } = useAuth();

  const [report, setReport] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState<string[]>([]);

  const fetchReportDetails = async () => {
    if (!reportId || !storedAuthData) {
      console.error("Report ID or authorization data is missing");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`${GET_REPORT_BY_ID}${reportId}`, {
        headers: {
          Authorization: `Bearer ${storedAuthData.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      // Check if the response has the expected data structure
      console.log("Report data:", response.data);
      setReport(response.data);
    } catch (error) {
      console.error("Error fetching report details", error);
      console.error("reportId:", reportId, "storedAuthData:", storedAuthData);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReportDetails();
  }, [reportId, storedAuthData]);

  const generateReport = async (reportID: string) => {
    setIsGeneratingReport((prev) => [...prev, reportID]);
    try {
      const response = await fetch("http://localhost:3000/pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error generating report", error);
    } finally {
      setIsGeneratingReport((prev) => prev.filter((id) => id !== reportID));
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        {/* Header */}
        <div className="flex items-center">
          <BackButton onClick={() => router.replace("/reports")} />
          <p className="ml-[4.071vw] font-bold text-lg">
            Report Details - {reportId}
          </p>
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
              {report ? (
                <div
                  key={report.reportId}
                  className="flex flex-row gap-4 text-[15px]"
                >
                  <div>
                    <p className="mb-1">Report ID:</p>
                    <p className="mb-1">Patient Name:</p>
                    <p className="mb-1">Created By:</p>
                    <p className="mb-1">Created Date:</p>
                    <p className="mb-1">Created Time:</p>
                    <p className="mb-1">Status:</p>
                  </div>
                  <div className="font-semibold">
                    <p className="mb-1">{report.reportId}</p>
                    <p className="mb-1">{report.patientId}</p>
                    <p className="mb-1">{report.createdBy}</p>
                    <p className="mb-1">
                      {new Date(report.createdAt).toLocaleDateString()}
                    </p>
                    <p className="mb-1">
                      {new Date(report.createdAt).toLocaleTimeString()}
                    </p>
                    <p className="mb-1 text-green-700">
                      {report.status.charAt(0).toUpperCase() +
                        report.status.slice(1)}
                    </p>
                  </div>
                </div>
              ) : (
                <p>No report found.</p>
              )}
            </div>

            {/* Open AI */}
            <div className="mt-[3.5vh] px-[3.817vw] py-[2.086vh] rounded-lg bg-white flex flex-col gap-[1.4vh] ">
              {report ? (
                <div key={report.reportId} className="mb-2 flex flex-col">
                  <p className="font-semibold mb-2">Suggestions:</p>
                  <ul className="list-disc pl-5">
                    {report.openAiRecommendation.map((suggestion: string) => (
                      <li key={suggestion} className="text-sm mb-1">
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No report found.</p>
              )}
            </div>

            {/* View Report PDF */}
            <div className="mt-[3.5vh]">
              {report && (
                <div className="h-[6.074vh]">
                  <CommonBtn
                    label="View Report"
                    onClick={() => generateReport(report.reportId)}
                    isLoading={isGeneratingReport.includes(report.reportId)}
                    // isBtnDisabled={report.status === "pending"}
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

function ReportDetailsWrapper() {
  return (
    <Suspense fallback={<div>Loading report details...</div>}>
      <ReportDetailsComponent />
    </Suspense>
  );
}

export default ReportDetailsWrapper;
