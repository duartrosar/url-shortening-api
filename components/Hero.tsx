import Image from "next/image";
import React from "react";
import workingIlustration from "@/public/ilustrations/illustration-working.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="px-6 sm:container lg:w-[2000px] mx-auto pt-24 flex flex-col-reverse lg:flex-row lg:gap-24 lg:pt-32 lg:px-14">
      <div className="pt-10 flex flex-col items-center lg:items-start lg:min-w-[500px] xl:min-w-[700px]">
        <h1 className="font-[800] text-[42px] leading-[48px] text-very-dark-blue text-center w-full lg:text-6xl xl:text-8xl lg:text-left">
          More than just shorter links
        </h1>
        <p className="text-center mt-[15px] text-gray-violet text-lg leading-[30px] font-medium lg:text-left xl:text-[22px]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link className="mt-8 lg:mt-10" href="/">
          <p className="bg-cyan rounded-full px-10 py-3 font-bold text-[20px] text-white text-center">
            Get Started
          </p>
        </Link>
      </div>
      <div className="">
        <Image
          className="min-w-[495px] lg:min-w-[733px]"
          src={workingIlustration}
          alt="Working Ilustration"
        />
      </div>
    </div>
  );
}
