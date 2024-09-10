"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-blueBg text-black">
      <div className="flex flex-col ">
        <Image
          src={"/assets/images/logo.png"}
          alt={"logo"}
          height={80}
          width={200}
        />
      </div>
    </div>
  );
}
