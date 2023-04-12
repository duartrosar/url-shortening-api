import brandRecognitionImg from "../public/icons/icon-brand-recognition.svg";
import detailedRecordsImg from "../public/icons/icon-detailed-records.svg";
import fullyCustomizableImg from "../public/icons/icon-fully-customizable.svg";
import StatisticsCard from "./StatisticsCard";
import statistics from "../data/advancedStatistics.json";

export default function Statistics() {
  const { brandRecognition, detailedRecords, fullyCustomizable } =
    statistics.statistics;

  const statisticsData = [
    {
      imagePath: brandRecognitionImg,
      ...brandRecognition,
    },
    {
      imagePath: detailedRecordsImg,
      ...detailedRecords,
    },
    {
      imagePath: fullyCustomizableImg,
      ...fullyCustomizable,
    },
  ];

  return (
    <div className="bg-[#EFF1F7] pt-2 xl:pt-12 xl:pb-[120px]">
      <div className="px-6 sm:container mx-auto lg:px-14 flex flex-col items-center">
        <h2 className="font-bold text-[28px] text-center text-very-dark-blue xl:text-[40px]">
          Advanced Statistics
        </h2>
        <p className="text-center mt-4 text-gray-violet text-base leading-[28px] font-medium xl:text-lg max-w-[510px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="mt-24"></div>
        <div className="flex flex-col items-center justify-center xl:flex-row xl:items-start">
          {/* {statisticsData.map((data, index) => (
          <div key={index} className={`xl:flex xl:items-center`}>
            <StatisticsCard {...data} index={index} />
            {index < statisticsData.length - 1 && (
              <div className="h-24 border-x-4 border-cyan w-0 mx-auto xl:h-0 xl:w-24 xl:border-y-4"></div>
            )}
          </div>
        ))} */}
          <StatisticsCard {...statisticsData[0]} offset={0} />
          <div className="h-24 border-x-4 border-cyan w-0 mx-auto xl:h-0 xl:w-24 xl:border-y-4 xl:translate-y-[152px]"></div>
          <StatisticsCard {...statisticsData[1]} offset={44} />
          <div className="h-24 border-x-4 border-cyan w-0 mx-auto xl:h-0 xl:w-24 xl:border-y-4 xl:translate-y-[152px]"></div>
          <StatisticsCard {...statisticsData[2]} offset={88} />
        </div>
      </div>
    </div>
  );
}
