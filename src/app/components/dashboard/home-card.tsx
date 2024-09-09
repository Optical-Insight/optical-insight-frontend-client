import Image from "next/image";

interface HomeCardProps {
  imageUrl: string;
  text: string;
}

const HomeCard = ({ imageUrl, text }: HomeCardProps) => {
  return (
    <div
      className="h-[12.517vh] px-[4.58vw] rounded-xl flex items-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <Image
        src={"/assets/icons/logo-icon-white.png"}
        alt={"logo"}
        height={26.07}
        width={44}
      />
      <p className="ml-[6.361vw] text-white font-bold text-[20px]">{text}</p>
    </div>
  );
};

export default HomeCard;
