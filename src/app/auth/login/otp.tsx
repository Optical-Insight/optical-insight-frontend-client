"use client";
import React from "react";
import BackButton from "@/app/components/common/btn-back";
import { Flex, Input } from "antd";
import type { GetProps } from "antd";
import CommonBtn from "@/app/components/common/button";
import { OTPDataProps } from "@/utils/auth";

type OTPProps = GetProps<typeof Input.OTP>;

function PatientLoginOTP({ loginLabel, setStep }: OTPDataProps) {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const verifyOTP = () => {
    console.log("OTP Verified");
    setStep(3);
  };

  const resendOTP = () => {
    console.log("Resend OTP");
  };

  const handleBackBtnClicked = () => {
    setStep(1);
  };

  return (
    <div className="flex flex-row justify-between">
      {/* Back Btn */}
      <div className="mt-[4.1vh] mx-[7.125vw]">
        <BackButton onClick={handleBackBtnClicked} />
        <p className="mt-[7.405vh] font-bold text-2xl">OTP Verification</p>
        <p className="mt-[2.225vh] text-sm text-grayText">
          We sent an OTP Code to{" "}
          {loginLabel === "Email"
            ? "kith****.*@opticalin.com"
            : "+947 *** **47"}{" "}
          enter 5 digit code that mentioned in the{" "}
          {loginLabel === "Email" ? "email" : "SMS"}.
        </p>

        <div className="mt-[4.451vh] flex justify-center items-center">
          <Flex gap="middle" align="flex-start" vertical>
            <Input.OTP
              //formatter={(str) => str.toUpperCase()}
              {...sharedProps}
            />
          </Flex>
        </div>

        <div className="w-full rounded-lg text-sm h-[6.074vh] mt-[4.451vh]">
          <CommonBtn label="Verify Code" onClick={verifyOTP} />
        </div>

        <div className="flex justify-center text-sm mt-[1.113vh]">
          <p className="text-grayLightText">Haven’t got the OTP yet?</p>{" "}
          <p className="text-blueText cursor-pointer" onClick={resendOTP}>
            {" "}
            Resend
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientLoginOTP;
