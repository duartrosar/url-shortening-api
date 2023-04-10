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
  const [copy, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard
      .writeText(shortenedLink!)
      .then(() => console.log("Copied to clipboard"))
      .catch((err) => console.error("Failed to copy:", err));

    setCopied(true);
  }

  return (
    <div className="flex flex-col w-full rounded-lg bg-white mt-6 -translate-y-[72px] gap-3">
      <div className="pt-4 px-4">
        <Link href={inputLink!} target="_blank">
          <p className="text-base font-medium ">{inputLink}</p>
        </Link>
      </div>
      <div className="border-b border-b-gray-violet opacity-25"></div>
      <div className="pb-4 px-4">
        <Link href={shortenedLink!} target="_blank">
          <p className="text-base font-medium text-cyan">{shortenedLink}</p>
        </Link>
        <button
          onClick={onCopy}
          className={`w-full mt-3 ${
            copied ? "bg-dark-violet" : "bg-cyan"
          } rounded-md h-10 font-bold text-[18px] text-white text-center flex items-center justify-center lg:px-10 whitespace-nowrap xl:h-16`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
