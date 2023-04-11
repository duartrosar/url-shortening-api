import Image from "next/image";
import classNames from "classnames";

interface StatisticsCardProps {
  imagePath: string;
  title: string;
  body: string;
  offset: number;
}

export default function StatisticsCard({ ...props }: StatisticsCardProps) {
  // const offset = (props.index + 1) * 24;

  const containerClasses = classNames(
    "rounded-lg",
    "bg-white",
    "px-8",
    "pb-10",
    "flex",
    "items-center xl:items-start",
    "flex-col",
    { [`xl:translate-y-[44px]`]: props.offset === 44 },
    { [`xl:translate-y-[88px]`]: props.offset === 88 },
  );

  console.log(props.offset);
  return (
    <div className={containerClasses}>
      <div className="w-[88px] h-[88px] rounded-full bg-dark-violet flex items-center justify-center -translate-y-1/2">
        <Image src={props.imagePath} alt="Brand Recognition" />
      </div>
      <div className="-mt-2">
        <h2 className="font-bold text-[22px] text-center text-very-dark-blue xl:text-left">
          {props.title}
        </h2>
        <p className="text-center mt-3 text-gray-violet text-[15px] leading-[28px] font-medium xl:text-left">
          {props.body}
        </p>
      </div>
    </div>
  );
}
