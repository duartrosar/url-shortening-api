import React from "react";
import Logo from "@/public/logo-white.svg";
import Link from "next/link";
import Image from "next/image";
import FooterMenu from "./FooterMenu";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

interface menuItem {
  title: string;
  url: string;
}

export default function Footer() {
  const features: menuItem[] = [
    {
      title: "Link Shortening",
      url: "/link-shortening",
    },
    {
      title: "Branded Links",
      url: "/branded-links",
    },
    {
      title: "Analytics",
      url: "/analytics",
    },
  ];

  const resources: menuItem[] = [
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Developers",
      url: "/developers",
    },
    {
      title: "Support",
      url: "/support",
    },
  ];

  const company: menuItem[] = [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Our Team",
      url: "/our-team",
    },
    {
      title: "Careers",
      url: "/careers",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="bg-very-dark-violet py-14 ">
      <div className="sm:container mx-auto flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between lg:px-14">
        <div className="">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-[120px]" />
          </Link>
        </div>
        <div className="lg:flex lg:items-start">
          <div className="flex flex-col lg:flex-row mt-[47px] gap-10 lg:mt-0 lg:mr-[100px] lg:gap-[78px]">
            <FooterMenu items={features} title="Features" />
            <FooterMenu items={resources} title="Resources" />
            <FooterMenu items={company} title="Company" />
          </div>
          <div className="flex gap-6 mt-12 lg:mt-0">
            <FaFacebookSquare className="cursor-pointer w-6 h-6 text-white hover:text-cyan" />
            <FaTwitter className="cursor-pointer w-6 h-6 text-white hover:text-cyan" />
            <FaPinterest className="cursor-pointer w-6 h-6 text-white hover:text-cyan" />
            <FaInstagram className="cursor-pointer w-6 h-6 text-white hover:text-cyan" />
          </div>
        </div>
      </div>
    </div>
  );
}
