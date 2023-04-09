import React from "react";

interface LinkItem {
  inputLink: string;
  shortenedLink?: string;
}

export default function ShortenedLink({ inputLink, shortenedLink }: LinkItem) {
  return (
    <div className="flex flex-col w-full rounded-lg bg-white mt-6 -translate-y-[72px] gap-3">
      <div className="pt-4 px-4">
        <p className="text-base font-medium ">{inputLink}</p>
      </div>
      <div className="border-b border-b-gray-violet opacity-25"></div>
      <div className="pb-4 px-4">
        <p className="text-base font-medium text-cyan">{shortenedLink}</p>
        <button className="w-full mt-3 bg-cyan rounded-md h-10 font-bold text-[18px] text-white text-center flex items-center justify-center lg:px-10 whitespace-nowrap xl:h-16">
          Copy
        </button>
      </div>
    </div>
  );
}
