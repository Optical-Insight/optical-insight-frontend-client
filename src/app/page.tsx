import Image from "next/image";
import React from "react";

export default function Home() {
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
