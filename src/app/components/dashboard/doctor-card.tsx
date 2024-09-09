import Image from "next/image";

interface DoctorCardProps {
  imageUrl: string;
  name: string;
  price: string;
  rating: string;
}

const DoctorCard = ({ rating, imageUrl, name, price }: DoctorCardProps) => {
  return (
    <div className="rounded-lg bg-white min-w-[28vw]">
      <div className="mt-[1.252vh] mx-[2.29vw] flex items-center">
        <Image
          className="rounded-xl"
          src="/assets/icons/star.png"
          alt="Star"
          height={7}
          width={14}
        />
        <p className="font-bold ml-[1.2vw] text-[10px]">{rating}</p>
      </div>
      <div className="mt-[1.113vh] flex justify-center ">
        <Image src={imageUrl} alt="profile picture" height={54} width={54} />
      </div>
      <div className="mt-[1.391vh] flex flex-col items-center mb-[1.3vh]">
        <p className="font-bold text-[14px]">Dr. {name}</p>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-[13px] text-greenText mt-[3px] mb-[-3px]">
            LKR {price}
          </p>
          <p className="text-[10px]">per appoinment</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
