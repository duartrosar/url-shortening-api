import Link from "next/link";
import React from "react";

interface menuItem {
  title: string;
  url: string;
}

interface FooterMenuProps {
  items: menuItem[];
  title: string;
}

export default function FooterMenu(props: FooterMenuProps) {
  console.log(typeof props);
  return (
    <div>
      <h2 className="text-center text-white font-bold text-base lg:text-left">
        {props.title}
      </h2>
      <ul className="mt-[22px] flex flex-col gap-[10px]">
        {props.items.map((data, index) => (
          <li className="text-center text-[#BFBFBF] text-[15px] font-medium lg:text-left hover:text-cyan">
            <Link href={data.url} key={index}>
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
