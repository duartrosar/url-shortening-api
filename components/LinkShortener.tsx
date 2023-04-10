import React, { useState, useEffect } from "react";
import mobileBackground from "@/public/backgrounds/bg-shorten-mobile.svg";
import desktopBackground from "@/public/backgrounds/bg-shorten-desktop.svg";
import Image from "next/image";
import Link from "next/link";
import ShortenedLink from "./ShortenedLink";
import { useCookies } from "react-cookie";

interface LinkItem {
  inputLink: string;
  shortenedLink: string;
}

export default function LinkShortener() {
  const [cookie, setCookie] = useCookies(["linkItems"]);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [linkInput, setLinkInput] = useState("");
  const [error, setError] = useState(false);
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [copiedLink, setCopiedLink] = useState<number | null>(null);

  function handleCopy(linkId: number) {
    navigator.clipboard
      .writeText(links[linkId].shortenedLink)
      .then(() => console.log("Copied to clipboard"))
      .catch((err) => console.error("Failed to copy:", err));

    setCopiedLink(linkId);
  }

  async function fetchData() {
    const body = "example.org/very/long/link.html";

    const response = await fetch("/api/shrtcode", {
      method: "POST",
      body: JSON.stringify(linkInput),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  }

  useEffect(() => {
    const linkJson = JSON.stringify(links);

    setCookie("linkItems", linkJson, { path: "/" });
  }, [links, setCookie]);

  // Set the width of the viewport and set the links to whatever is in the cookies
  useEffect(() => {
    if (cookie.linkItems) {
      setLinks(cookie.linkItems);
    }
    setViewportWidth(window.innerWidth);
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add new link to link array
  const handleClick = async () => {
    if (!linkInput) {
      setError(true);
      return;
    }

    setError(false);

    const response = await fetchData();

    if (!response.ok) {
      setError(true);
      return;
    }

    const newLink: LinkItem = {
      inputLink: response.result.original_link,
      shortenedLink: response.result.full_short_link,
    };

    setLinks([newLink, ...links]);
    setLinkInput("");

    setCopiedLink(null);

    console.log(response);
  };

  // Handle link input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLinkInput(value);
    setError(false);
  };

  return (
    <div className="px-6 bg-[#EFF1F7] sm:container mx-auto lg:px-14">
      <div className="w-full bg-dark-violet rounded-lg -translate-y-[72px] overflow-hidden p-6 md:p-8 relative xl:px-16 xl:py-[52px]">
        <Image
          className="absolute top-0 right-0 w-[200px] z-0 md:w-full md:h-full"
          src={viewportWidth >= 768 ? desktopBackground : mobileBackground}
          alt="Background graphic"
        />
        <div className="relative flex flex-col gap-4 lg:flex-row xl:gap-6">
          <div className="flex-grow">
            <input
              value={linkInput}
              onChange={(e) => handleChange(e)}
              type="text"
              className={`h-12 rounded-md pl-4 w-full xl:h-16 focus:outline-none focus:ring-cyan focus:ring-2 ${
                error ? "ring-secondary-red ring-2" : ""
              }`}
              placeholder="Shorten a link here..."
            />
            <p
              className={`text-xs text-secondary-red font-medium italic mt-1 lg:absolute ${
                error ? "" : "hidden"
              }`}
            >
              Please add a link
            </p>
          </div>
          <button
            onClick={handleClick}
            className="bg-cyan rounded-md h-12 font-bold text-[18px] text-white text-center flex items-center justify-center lg:px-10 whitespace-nowrap xl:h-16"
          >
            Shorten it!
          </button>
        </div>
      </div>
      {links &&
        links.map((link, index) => (
          <ShortenedLink
            key={index}
            inputLink={link.inputLink}
            shortenedLink={link.shortenedLink}
            copied={copiedLink === index}
            onCopy={() => handleCopy(index)}
          />
        ))}
    </div>
  );
}
