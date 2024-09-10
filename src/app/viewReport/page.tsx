"use client";

import React, { useState, useEffect } from "react";
import BackButton from "../components/common/btn-back";
import IconBtn from "../components/common/icon-button";
import { IoNewspaperOutline } from "react-icons/io5";

function ViewReport() {
  const [pdfUrl, setPdfUrl] = useState(
    "https://courseweb.sliit.lk/pluginfile.php/389603/mod_resource/content/1/Lab%20Sheet%20-%20August%2031st%20-%20Doc%20A.pdf"
  );
  const [pdfError, setPdfError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if the PDF file exists
    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Error loading PDF:", error);
        setPdfError(true);
        setErrorMessage(`Failed to load PDF. Error: ${error.message}`);
      });
  }, [pdfUrl]);

  const handleBackBtnClicked = () => {
    console.log("Back button clicked");
    // Implement your back navigation logic here
  };

  const handleViewRemarks = () => {
    console.log("View remarks clicked");
    // Implement your view remarks logic here
  };

  const handleDownload = () => {
    if (pdfError) {
      alert("Sorry, the PDF is not available for download.");
      return;
    }
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      <div className="my-[3vh] mx-[7.125vw]">
        <div className="flex items-center">
          <BackButton onClick={handleBackBtnClicked} />
          <p className="ml-[4.071vw] font-bold text-lg">
            2024.09.06 Report Results
          </p>
        </div>

        <div className="flex flex-row gap-3 mt-10">
          <IconBtn
            icon={<IoNewspaperOutline />}
            label="View Remarks"
            onClick={handleViewRemarks}
          />
          <IconBtn
            icon={<IoNewspaperOutline />}
            label="Download"
            onClick={handleDownload}
          />
        </div>

        <div className="mt-5 w-full h-[70vh]">
          {pdfError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
              <p>Sorry, the PDF could not be loaded.</p>
              <p>{errorMessage}</p>
              <p>Current PDF URL: {pdfUrl}</p>
            </div>
          ) : (
            <iframe src={pdfUrl} className="w-full h-full" title="PDF Viewer" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
