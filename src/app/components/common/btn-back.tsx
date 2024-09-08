// components/BackButton.tsx

import Image from "next/image";
// import { useRouter } from "next/router";

const BackButton = () => {
  // const router = useRouter();

  const goBack = () => {
    // router.back();
  };

  return (
    <button
      className="cursor-pointer bg-blueBgTwo flex justify-center items-center h-[37px] w-[37px] rounded-full"
      onClick={goBack}
    >
      <Image
        src="/assets/icons/back-icon.png"
        alt="Back"
        width={7.78}
        height={17.57}
      />
    </button>
  );
};

export default BackButton;
