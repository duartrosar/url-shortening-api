import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import LinkShortener from "@/components/LinkShortener";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className} overflow-x-hidden`}>
        <Hero />
        <LinkShortener />
      </main>
    </>
  );
}
