"use client";
import React, { useState } from "react";
import BackButton from "@/app/components/common/btn-back";
import { Flex, Input } from "antd";
import type { GetProps } from "antd";
import CommonBtn from "@/app/components/common/button";
import { OTPDataProps } from "@/utils/auth";
import axios from "axios";
import { VERIFY_USING_MOBILE_URL } from "@/constants/config";
import { useAuth } from "@/context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import ModalAlert from "@/app/components/common/modal-alert";

type OTPProps = GetProps<typeof Input.OTP>;

function PatientLoginOTP({
  loginLabel,
  setStep,
  email,
  mobileNo,
}: OTPDataProps) {
  const { isAuthenticated, login } = useAuth();

  const [otpCode, setOtpCode] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChange: OTPProps["onChange"] = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    setOtpCode(numericText.toString());
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const verifyUsingMobile = async () => {
    setIsLoading(true);
    if (!isAuthenticated) {
      axios
        .post(VERIFY_USING_MOBILE_URL, {
          phone: mobileNo,
          otp: otpCode,
        })
        .then((response) => {
          setIsLoading(false);
          console.log("Login Success:", response.data);
          setStep(3);
          login(response.data);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error("Invalid OTP. Please try again.", {
            duration: 4000,
            position: "top-center",
            style: {
              marginTop: "8px",
            },
          });
          console.error("Error in Login:", error);
        });
    }
  };

  // const verifyOTP = () => {
  //   verifyUsingMobile();
  // };

  const resendOTP = () => {
    console.log("Resend OTP");
  };

  const handleBackBtnClicked = () => {
    setStep(1);
  };

  return (
    <div>
      <div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "rgb(219, 234, 254)",
              },
            },
            error: {
              style: {
                background: "rgb(219, 234, 254)",
              },
            },
          }}
        />
      </div>

      <div className="flex flex-row justify-between">
        {/* Back Btn */}
        <div className="mt-[4.1vh] mx-[7.125vw]">
          <BackButton onClick={handleBackBtnClicked} />
          <p className="mt-[7.405vh] font-bold text-2xl">OTP Verification</p>
          <p className="mt-[2.225vh] text-sm text-grayText">
            We sent an OTP code to{" "}
            {loginLabel === "Email"
              ? `${email?.slice(0, 3)}****@${email?.split("@")[1]}`
              : `${mobileNo?.slice(0, 3)}*****${mobileNo?.slice(-2)}`}
            {". "}
            Enter 5 digit code that mentioned in the{" "}
            {loginLabel === "Email" ? "email" : "SMS"}.
          </p>

          <div className="mt-[4.451vh] flex justify-center items-center">
            <Flex gap="middle" align="flex-start" vertical>
              <Input.OTP {...sharedProps} />
            </Flex>
          </div>

          <div className="w-full rounded-lg text-sm h-[6.074vh] mt-[4.451vh]">
            <CommonBtn
              label="Verify Code"
              onClick={verifyUsingMobile}
              isLoading={isLoading}
            />
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
      <ModalAlert
        title="Login Error"
        message="The phone number you have entered is not registered. Please try again with a registered phone number."
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        btnLabel="Okay"
      />
    </div>
  );
}

export default PatientLoginOTP;
