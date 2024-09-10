import React from "react";
import ReportHeader from "./report-header";
import ReportPerosnDetails from "./report-person";
import DiseasCategory from "./diseasCategory";
import RepotImageContainer from "./repot-image-container";
import ReportFooter from "./report-footer";

function Report() {
  return (
    <div className="border-2  border-blueBg ">
      <ReportHeader />
      <ReportPerosnDetails />
      <DiseasCategory leftEyeResault="Drusen" RightEyeResault="Glaucoma" />
      <RepotImageContainer />
      <div className="text-[7.66px] font-bold text-grayLightText px-4 mt-3">
        <p>Disclaimers:</p>
        <p>
          This report does not replace professional medical advice, diagnosis or
          treatment.
        </p>
      </div>
      <ReportFooter />
    </div>
  );
}

export default Report;
