import React from "react";

function DiseasCategory({
  leftEyeResault,
  RightEyeResault,
}: {
  leftEyeResault: string;
  RightEyeResault: string;
}) {
  return (
    <div className="flex flex-col border-2 border-lightBlack px-2 mx-2 mt-5 py-1 gap-1">
      <div className="flex flex-auto justify-between ">
        <p className="font-semibold text-[7.31px] text-lightBlack w-24">
          Disease Name
        </p>
        <p className="font-semibold text-[7.31px] text-lightBlack">
          Results (LE)
        </p>
        <p className="font-semibold text-[7.31px] text-lightBlack">
          Results (RE)
        </p>
      </div>
      <div className="flex flex-auto justify-between ">
        <p className="font-medium text-[7.31px] text-lightBlack w-24">
          Mecular Hole
        </p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {leftEyeResault == "MH" ? "Positive" : "Negative"}
        </p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {RightEyeResault == "MH" ? "Positive" : "Negative"}
        </p>
      </div>
      <div className="flex flex-auto justify-between ">
        <p className="font-medium text-[7.31px] text-lightBlack w-24">
          Central Serous Retinopathy
        </p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {leftEyeResault == "CSR" ? "Positive" : "Negative"}
        </p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {RightEyeResault == "CSR" ? "Positive" : "Negative"}
        </p>
      </div>
      <div className="flex flex-auto justify-between ">
        <p className="font-medium text-[7.31px] text-lightBlack w-24">Drusen</p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {leftEyeResault == "Drusen" ? "Positive" : "Negative"}
        </p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {RightEyeResault == "Drusen" ? "Positive" : "Negative"}
        </p>
      </div>
      <div className="flex flex-auto justify-between ">
        <p className="font-medium text-[7.31px] text-lightBlack w-24">
          Glaucoma
        </p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {leftEyeResault == "Glaucoma" ? "Positive" : "Negative"}
        </p>
        <p className="font-medium text-[7.31px] text-lightBlack">
          {RightEyeResault == "Glaucoma" ? "Positive" : "Negative"}
        </p>
      </div>
    </div>
  );
}

export default DiseasCategory;
