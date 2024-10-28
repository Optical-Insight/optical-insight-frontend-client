"use client";
import React, { useState } from "react";
import PatientLoginOTP from "./otp";
import PatientLogin from "./login";
import SuccessLogin from "./success";

function Login() {
  const [step, setStep] = useState(1);
  const [mobileNo, setMobileNo] = useState("");

  return (
    <div className="w-screen h-screen flex flex-col bg-lightBg text-black">
      {step === 1 && (
        <PatientLogin
          setStep={setStep}
          mobileNo={mobileNo}
          setMobileNo={setMobileNo}
        />
      )}
      {step === 2 && <PatientLoginOTP setStep={setStep} mobileNo={mobileNo} />}
      {step === 3 && <SuccessLogin />}
    </div>
  );
}

export default Login;
