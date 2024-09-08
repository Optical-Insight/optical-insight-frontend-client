"use client";
import React from "react";
import CommonBtn from "@/app/components/common/button";
import { LoginDataProps } from "@/utils/auth";
import Image from "next/image";

function PatientLogin({ loginLabel, setLoginLabel, setStep }: LoginDataProps) {
  const handleSubmitLogin = () => {
    console.log("Login clicked");
    setStep(2);
  };

  const handleChangeLoginMethod = () => {
    setLoginLabel(loginLabel === "Email" ? "Phone" : "Email");
  };

  return (
    <div>
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
            <label className="block text-sm text-labelText">
              {loginLabel === "Email" ? "Email Address" : "Phone Number"}
            </label>
            <input
              className="w-full pl-1 rounded-lg text-sm text-black h-[6.079vh] mt-[1.164vh]"
              placeholder={
                loginLabel === "Email"
                  ? "kithminasiriwardaan@gmail.com"
                  : "0123456789"
              }
            />
          </div>

          <div className="w-full rounded-lg text-sm  h-[6.074vh] mt-[3.374vh]">
            <CommonBtn label="Send OTP" onClick={handleSubmitLogin} />
          </div>

          <div className="flex justify-center text-sm mt-[1.131vh]">
            <p
              className="text-blueText cursor-pointer"
              onClick={handleChangeLoginMethod}
            >
              Or continue with {loginLabel === "Email" ? "Phone" : "Email"}
            </p>
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
    </div>
  );
}

export default PatientLogin;
