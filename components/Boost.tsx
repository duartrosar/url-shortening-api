import Link from "next/link";
import { useEffect, useState } from "react";
import mobileBackground from "@/public/backgrounds/bg-boost-mobile.svg";
import desktopBackground from "@/public/backgrounds/bg-boost-desktop.svg";
import Image from "next/image";

export default function Boost() {
  const [viewportWidth, setViewportWidth] = useState(0);
  // Set the width of the viewport, to change the background image based on the width of the viewport
  useEffect(() => {
    setViewportWidth(window.innerWidth);
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-dark-violet mt-20 flex items-center flex-col py-[90px] px-[36px] relative xl:py-[57px]">
      <Image
        src={viewportWidth >= 768 ? desktopBackground : mobileBackground}
        className="absolute top-0 w-full h-full"
        alt="Background graphic"
      />
      <div className="relative flex flex-col items-center gap-4 xl:gap-8">
        <h1 className="text-white font-bold text-[28px] text-center tracking-tighter xl:text-[40px]">
          Boost your links today
        </h1>
        <Link className="" href="/">
          <p className="bg-cyan rounded-full px-10 py-3 font-bold text-[20px] text-white text-center btn hover:bg-[#9AE3E3]">
            Get Started
          </p>
        </Link>
      </div>
    </div>
  );
}
