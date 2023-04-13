import Link from "next/link";
import React, { useState } from "react";

interface LinkItem {
  inputLink: string;
  shortenedLink?: string;
}

interface ShortenedLinkProps extends LinkItem {
  copied: boolean;
  onCopy: () => void;
}

export default function ShortenedLink({
  inputLink,
  shortenedLink,
  copied,
  onCopy,
}: ShortenedLinkProps) {
  return (
    <div className="flex flex-col w-full rounded-lg bg-white mt-6 -translate-y-[72px] gap-3 xl:flex-row xl:px-8 xl:py-[18px] justify-between ">
      <div className="pt-4 px-4 xl:p-0 xl:flex xl:items-center">
        <Link href={inputLink!} target="_blank">
          <p className="text-base font-medium xl:text-xl">{inputLink}</p>
        </Link>
      </div>
      <div className="border-b border-b-gray-violet opacity-25 xl:hidden"></div>
      <div className="pb-4 px-4 xl:p-0 xl:flex xl:items-center xl:gap-6">
        <Link href={shortenedLink!} target="_blank">
          <p className="text-base font-medium text-cyan xl:text-xl">
            {shortenedLink}
          </p>
        </Link>
        <button
          onClick={onCopy}
          className={`w-full mt-3 ${
            copied
              ? "bg-dark-violet hover:opacity-75"
              : "bg-cyan hover:bg-[#9AE3E3]"
          } btn rounded-md h-10 text-[16px] flex items-center justify-center lg:px-10 whitespace-nowrap xl:m-0 xl:px-0 xl:py-[10px] xl:text-[15px] xl:min-w-[103px]`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
