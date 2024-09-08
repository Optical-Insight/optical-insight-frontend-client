"use client";
import React from "react";
import Image from "next/image";

function SuccessLogin() {
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

        {/* Image */}
        <div className="mt-[16.268vh] mx-[7.125vw] flex flex-col items-center">
          <Image
            src={"/assets/images/success.png"}
            alt={"success"}
            height={110}
            width={110}
          />

          <p className="mt-[5.563vh] text-2xl font-bold">Success!</p>

          <p className="mt-[2.225vh] mx-4 text-md text-blueText text-center">
            Congratulations! You have been successfully authenticated!
          </p>

          <div className="mt-[12.259vh]">
            <Image
              src={"/assets/icons/loading.png"}
              alt={"success"}
              height={36}
              width={36}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessLogin;
