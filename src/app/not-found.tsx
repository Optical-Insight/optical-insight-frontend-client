"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightBg">
      <h1 className="text-5xl text-blueText font-bold mb-[1.808vh]">Oops!</h1>
      <Image
        src="/assets/images/not-found.png"
        alt="404"
        width={300}
        height={300}
        className="mb-[1.808vh]"
      />
      <h1 className="text-4xl text-blueText font-bold mb-[1.113vh]">
        Page Not Found
      </h1>
      <p className="mb-[23.088vh] text-disabledText">
        The page you&#39;re looking for doesn&#39;t exist.
      </p>
      <button
        className="btn-primary bg-buttonPrimary py-2 px-3 h-[6.5vh] w-[70vw] rounded-md text-lg"
        onClick={() => router.replace("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Custom404;
