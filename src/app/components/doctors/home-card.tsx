import Image from "next/image";

interface DoctorsPageCardProps {
  imageUrl: string;
  name: string;
  specialty: string;
  experience: string;
  rating: string;
}

const DoctorsPageCard = ({
  imageUrl,
  name,
  specialty,
  experience,
  rating,
}: DoctorsPageCardProps) => {
  console.log(imageUrl, name, specialty, experience, rating);
  return (
    <div className="h-[12.517vh] px-[4.58vw] rounded-xl">
      <Image
        src={"/assets/icons/logo-icon-white.png"}
        alt={"logo"}
        height={26.07}
        width={44}
      />
      <p className="ml-[6.361vw] text-white font-bold text-[20px]">{name}</p>
    </div>
  );
};

export default DoctorsPageCard;
