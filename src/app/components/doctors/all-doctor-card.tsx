import Image from "next/image";

interface DoctorsPageCardProps {
  imageUrl: string;
  name: string;
  specialty: string;
  experience: string;
}

const DoctorsPageCard = ({
  imageUrl,
  name,
  specialty,
  experience,
}: DoctorsPageCardProps) => {
  return (
    <div className="px-[4.071vw] py-[1.971vh] rounded-lg bg-white flex flex-row gap-[4.5vw]">
      <Image
        src={imageUrl}
        alt={"logo"}
        height={83}
        width={88}
        className="rounded-xl"
      />
      <div className="flex flex-col justify-between">
        <p className="text-black font-bold text-[18px]">
          {"Dr."}
          {name}
        </p>
        <p className="text-blueText text-[14px]">
          Eye Specialist - {specialty}
        </p>
        <p className="text-grayText text-[12px]">{experience}</p>
      </div>
    </div>
  );
};

export default DoctorsPageCard;
