"use client";
import React, { useState } from "react";
import CommonBtn from "@/app/components/common/button";
import { LoginDataProps } from "@/utils/auth";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { LOGIN_USING_MOBILE_URL } from "@/constants/config";
import ModalAlert from "@/app/components/common/modal-alert";
import { Toaster, toast } from "react-hot-toast";

function PatientLogin({
  setStep,

  mobileNo,
  setMobileNo,
}: LoginDataProps) {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const LoginUsingMobile = async () => {
    setIsLoading(true);
    if (!isAuthenticated) {
      axios
        .post(LOGIN_USING_MOBILE_URL, {
          phone: mobileNo,
        })
        .then(() => {
          setIsLoading(false);
          setStep(2);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error("Number not registered", {
            duration: 4000,
            position: "top-center",
            style: {},
          });
          //setIsModalVisible(true);
          console.error("Error in Login:", error);
        });
    }
  };

  const handleSubmitLogin = () => {
    LoginUsingMobile();
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
                marginTop: "8px",
              },
            },
          }}
        />
      </div>

      <div className="mt-[14.047vh]">
        {/* HEADER */}
        <div className="flex flex-col items-center">
          <Image
            src={"/assets/images/logo.png"}
            alt={"logo"}
            height={80}
            width={200}
          />
        </div>

        {/* FORM */}
        <div className="mt-[8.901vh] mx-[7.125vw]">
          <p className="text-[40px] text-headerText font-bold">Login</p>

          <div className="mt-[5.512vh]">
            <label className="block text-sm text-labelText">Phone Number</label>
            <input
              className="w-full pl-1 rounded-lg text-sm text-black h-[6.079vh] mt-[1.164vh]"
              placeholder="0123456789"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setMobileNo(event.target.value);
              }}
            />
          </div>

          <div className="w-full rounded-lg text-sm  h-[6.074vh] mt-[3.374vh]">
            <CommonBtn
              label="Send OTP"
              onClick={handleSubmitLogin}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-[10px] text-blueText mx-[25%] mt-[24.061vh]">
        <p>
          Visit your nearest channeling center to create an optical insight
          account
        </p>
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

export default PatientLogin;
