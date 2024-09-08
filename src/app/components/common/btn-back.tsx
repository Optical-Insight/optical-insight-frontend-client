import Image from "next/image";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      className="cursor-pointer bg-blueBgTwo flex justify-center items-center h-[37px] w-[37px] rounded-full"
      onClick={onClick}
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
