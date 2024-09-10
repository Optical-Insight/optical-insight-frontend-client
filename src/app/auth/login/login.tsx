"use client";
import React from "react";
import CommonBtn from "@/app/components/common/button";
import { LoginDataProps } from "@/utils/auth";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { LOGIN_USING_MOBILE_URL } from "@/constants/config";

function PatientLogin({
  loginLabel,
  setLoginLabel,
  setStep,
  email,
  setEmail,
  mobileNo,
  setMobileNo,
}: LoginDataProps) {
  const { isAuthenticated } = useAuth();

  const LoginUsingMobile = async () => {
    if (!isAuthenticated) {
      setStep(2);
      axios
        .post(LOGIN_USING_MOBILE_URL, {
          phone: mobileNo,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error in Login:", error);
        });
    }
  };

  const handleSubmitLogin = () => {
    if (loginLabel === "Email") {
      console.log("Email: ", email);
    } else {
      console.log("Mobile: ", mobileNo);
      LoginUsingMobile();
    }
  };

  // const LoginUsingEmail = async (e: any) => {
  //   if (!isAuthenticated) {
  //     e.preventDefault();
  //     axios
  //       .post(LOGIN_USING_MOBILE_URL, {
  //         email,
  //       })
  //       .then((response) => {
  //         console.log("Login Success:", response.data);
  //         //login(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error in Login:", error);
  //       });
  //   }
  // };

  // const verifyUsingEmail = async (e: any) => {
  //   if (!isAuthenticated) {
  //     e.preventDefault();
  //     axios
  //       .post(VERIFY_USING_MOBILE_URL, {
  //         email,
  //       })
  //       .then((response) => {
  //         console.log("Login Success:", response.data);
  //         //login(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error in Login:", error);
  //       });
  //   }
  // };

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
                  ? "kithminasiriwardana@gmail.com"
                  : "0123456789"
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                loginLabel === "Email"
                  ? setEmail(event.target.value)
                  : setMobileNo(event.target.value);
              }}
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
