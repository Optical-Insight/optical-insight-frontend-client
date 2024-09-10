import React from "react";
import Image from "next/image";
function RepotImageContainer() {
  return (
    <div className="flex flex-col mt-5 w-full">
      <div className="flex flex-row w-full text-lightGrayText text-[6.8px]">
        <div className="flex flex-auto  justify-center w-1/2  ">
          <p>Left Eye</p>
        </div>
        <div className="flex flex-auto  justify-center w-1/2 ">
          <p>Right Eye</p>
        </div>
      </div>
      <div className="flex flex-row w-full mt-2">
        <div className="flex flex-auto  justify-center w-1/2  ">
          <Image
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt={"logo"}
            height={120}
            width={120}
          />
        </div>
        <div className="flex flex-auto  justify-center w-1/2 ">
          <Image
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt={"logo"}
            height={120}
            width={120}
          />
        </div>
      </div>
      <div className="flex flex-row w-full mt-2">
        <div className="flex flex-auto  justify-center w-1/2  ">
          {true ? (
            <Image
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt={"logo"}
              height={120}
              width={120}
            />
          ) : (
            <p className="text-lightGrayText text-[6.8px] mt-8">
              Not any infected affeccted
            </p>
          )}
        </div>
        <div className="flex flex-auto  justify-center w-1/2 ">
          {false ? (
            <Image
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt={"logo"}
              height={120}
              width={120}
            />
          ) : (
            <p className="text-lightGrayText text-[6.8px] mt-8">
              Not any infected affeccted
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row w-full mt-2">
        <div className="flex flex-auto  justify-center w-1/2 ">
          {true ? (
            <Image
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt={"logo"}
              height={120}
              width={120}
            />
          ) : (
            <p className="text-lightGrayText text-[6.8px] mt-8">
              Not any infected affeccted
            </p>
          )}
        </div>
        <div className="flex flex-auto  justify-center w-1/2 ">
          {false ? (
            <Image
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt={"logo"}
              height={120}
              width={120}
            />
          ) : (
            <p className="text-lightGrayText text-[6.8px] mt-8">
              Not any infected affeccted
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RepotImageContainer;
