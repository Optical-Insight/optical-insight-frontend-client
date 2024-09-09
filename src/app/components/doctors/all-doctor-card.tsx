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
    <div className="px-[4.071vw] py-[1.971vh] rounded-lg bg-white flex flex-row gap-[4.5vw]">
      <Image src={imageUrl} alt={"logo"} height={87} width={93} />
      <div className="flex flex-col justify-between">
        <p className="text-black font-bold text-[18px]">{name}</p>
        <p className="text-blueText text-[14px]">{specialty}</p>
        <p className="text-grayText text-[12px]">{experience}</p>
        <div className="mt-[0.7vh] flex items-center">
          <Image
            src="/assets/icons/star.png"
            alt="Star"
            height={7}
            width={14}
          />
          <p className="font-bold ml-[1.2vw] text-[10px]">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPageCard;
