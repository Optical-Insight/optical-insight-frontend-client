"use client";
import React, { useState } from "react";
import PatientLoginOTP from "./otp";
import PatientLogin from "./login";
import SuccessLogin from "./success";

function Login() {
  const [loginLabel, setLoginLabel] = useState("Phone");
  const [step, setStep] = useState(1);
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      {step === 1 && (
        <PatientLogin
          loginLabel={loginLabel}
          setLoginLabel={setLoginLabel}
          setStep={setStep}
          email={email}
          setEmail={setEmail}
          mobileNo={mobileNo}
          setMobileNo={setMobileNo}
        />
      )}
      {step === 2 && (
        <PatientLoginOTP
          loginLabel={loginLabel}
          setStep={setStep}
          email={email}
          mobileNo={mobileNo}
        />
      )}
      {step === 3 && <SuccessLogin />}
    </div>
  );
}

export default Login;
