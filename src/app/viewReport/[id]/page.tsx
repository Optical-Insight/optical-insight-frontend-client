"use client";

import BackButton from "@/app/components/common/btn-back";
import IconBtn from "@/app/components/common/icon-button";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
function ViewReport(id: any) {
  const [pdfUrl, setPdfUrl] = useState(
    "https://courseweb.sliit.lk/pluginfile.php/389603/mod_resource/content/1/Lab%20Sheet%20-%20August%2031st%20-%20Doc%20A.pdf"
  );
  const [pdfError, setPdfError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isViewRemarkOpened, setViewRemarkOpened] = useState(false);
  console.log("idddddddddddd", id);
  const router = useRouter();
  useEffect(() => {
    // Check if the PDF file exists
    setPdfUrl(
      "https://courseweb.sliit.lk/pluginfile.php/389603/mod_resource/content/1/Lab%20Sheet%20-%20August%2031st%20-%20Doc%20A.pdf"
    );
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
    router.push("/reports");
    // Implement your back navigation logic here
  };

  const handleViewRemarks = () => {
    setViewRemarkOpened(!isViewRemarkOpened);
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
    <div className="w-screen min-h-screen flex flex-col bg-lightBg text-black  overflow-auto ">
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
            label={isViewRemarkOpened ? "View Reports" : "View Remarks"}
            onClick={handleViewRemarks}
          />
          <IconBtn
            icon={<IoNewspaperOutline />}
            label="Download"
            onClick={handleDownload}
          />
        </div>

        {!isViewRemarkOpened ? (
          <div className="mt-5 w-full h-[70vh]">
            {pdfError ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
                <p>Sorry, the PDF could not be loaded.</p>
                <p>{errorMessage}</p>
                <p>Current PDF URL: {pdfUrl}</p>
              </div>
            ) : (
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="PDF Viewer"
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="mt-10">
              {" "}
              <p className="text-[40px] font-semibold">Report Remarks</p>
            </div>
            <div className="mt-10 flex flex-row">
              <p className="text-green-600 mr-4 mt-[8px]">
                <FaCircle />
              </p>
              <p>
                afd ajfid jaf ojaiofj ioajf ioja ifjai jaiopf japfj ipajf sjf
                jsdfjasiofjiosj goisjh giosdgohdg odhfsj guhdug hiuhg oshgsuo
                gosi gios gshf goshf oshg sfi ghosf hodhfgosf giosf gos hgos
                hgios hgiosggiosf hgiofsd hg
              </p>
            </div>
            <div className="mt-10 flex flex-row">
              <p className="text-green-600 mr-4 mt-[8px]">
                <FaCircle />
              </p>
              <p>
                afd ajfid jaf ojaiofj ioajf ioja ifjai jaiopf japfj ipajf sjf
                jsdfjasiofjiosj goisjh giosdgohdg odhfsj guhdug hiuhg oshgsuo
                gosi gios gshf goshf oshg sfi ghosf hodhfgosf giosf gos hgos
                hgios hgiosggiosf hgiofsd hg
              </p>
            </div>
            <div className="mt-10 flex flex-row">
              <p className="text-green-600 mr-4 mt-[8px]">
                <FaCircle />
              </p>
              <p>
                afd ajfid jaf ojaiofj ioajf ioja ifjai jaiopf japfj ipajf sjf
                jsdfjasiofjiosj goisjh giosdgohdg odhfsj guhdug hiuhg oshgsuo
                gosi gios gshf goshf oshg sfi ghosf hodhfgosf giosf gos hgos
                hgios hgiosggiosf hgiofsd hg
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewReport;
