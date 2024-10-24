import { ReportListCardProps } from "@/utils/report";

const ReportListCard = ({
  reportId,
  createdBy,
  createdAt,
  status,
  onClick,
}: ReportListCardProps) => {
  return (
    <div
      className="px-[3.817vw] py-[2.086vh] rounded-lg bg-white flex flex-row gap-[4.5vw] cursor-pointer"
      onClick={onClick}
    >
      <div className="h-[8vh] w-[8vh] bg-blueBgTwo rounded-xl flex flex-col justify-center items-center">
        <p className="font-bold text-[16px] text-white">
          {new Date(createdAt).toLocaleDateString("en-US", {
            day: "numeric",
          })}
        </p>
        <p className="font-bold text-[16px] text-white">
          {new Date(createdAt).toLocaleDateString("en-US", {
            month: "short",
          })}
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-black font-bold text-[17px]">{reportId}</p>
        <p className="text-blueText text-[14px]">{createdBy}</p>
        <p
          className={`mt-[2px] text-[12px] font-semibold ${
            status === "pending" ? "text-yellow-600" : "text-green-700"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default ReportListCard;
