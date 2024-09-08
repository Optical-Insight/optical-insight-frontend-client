"use client";
import React, { useState } from "react";
import PatientLoginOTP from "./otp";
import PatientLogin from "./login";
import SuccessLogin from "./success";

function Login() {
  const [loginLabel, setLoginLabel] = useState("Email");
  const [step, setStep] = useState(1);

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      {step === 1 && (
        <PatientLogin
          loginLabel={loginLabel}
          setLoginLabel={setLoginLabel}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <PatientLoginOTP loginLabel={loginLabel} setStep={setStep} />
      )}
      {step === 3 && <SuccessLogin />}
    </div>
  );
}

export default Login;
