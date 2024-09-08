"use client";
import CommonBtn from "@/app/components/common/button";
import Image from "next/image";
import React, { useState } from "react";

function PatientLogin() {
  const [loginLabel, setLoginLabel] = useState("Email");

  const handleSubmitLogin = () => {
    console.log("Login clicked");
  };

  console.log("setLoginLabel", setLoginLabel);

  // const handleChangeLoginMethod = () => {
  //   setLoginLabel(loginLabel === "Email" ? "Phone" : "Email");
  // };

  return (
    <div className="w-screen h-screen flex flex-col justify-center bg-lightBg">
      <div className="flex flex-col items-center">
        <Image
          src={"/assets/images/logo.png"}
          alt={"logo"}
          height={80}
          width={200}
        />
      </div>

      <div className="mt-[24%] mx-[6%]">
        <p className="text-4xl text-headerText font-bold">Login</p>

        <div className="mt-[12%]">
          <label className="block text-md  text-labelText">
            {loginLabel === "Email" ? "Email Address" : "Phone Number"}
          </label>
          <input
            placeholder={
              loginLabel === "Email"
                ? "kithminasiriwardaan@gmail.com"
                : "0123456789"
            }
            className="w-full rounded-lg text-sm h-10 mt-[1.5%]"
          />
        </div>

        <div className="w-full rounded-lg h-10 mt-[6%]">
          <CommonBtn label="Send OTP" onClick={handleSubmitLogin} />
          <p className="text-blueText">Or Continue With Phone</p>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
