interface ReportListCardProps {
  name: string;
  docName: string;
  timestamp: string;
}

const ReportListCard = ({ name, docName, timestamp }: ReportListCardProps) => {
  return (
    <div className="px-[3.817vw] py-[2.086vh] rounded-lg bg-white flex flex-row gap-[4.5vw]">
      <div className="h-[7.395vh] w-[7.395vh] bg-blueBgTwo rounded-xl flex flex-col justify-center items-center">
        <p className="font-bold text-[16px] text-white">06</p>
        <p className="font-bold text-[16px] text-white">SEP</p>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-black font-bold text-[17px]">{name}</p>
        <p className="text-blueText text-[14px]">{docName}</p>
        <p className="text-grayText text-[12px]">{timestamp}</p>
      </div>
    </div>
  );
};

export default ReportListCard;
