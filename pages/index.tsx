import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import LinkShortener from "@/components/LinkShortener";
import Statistics from "@/components/Statistics";
import Boost from "@/components/Boost";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className} overflow-x-hidden bg-[#EFF1F7]`}>
        <Hero />
        <LinkShortener />
        <Statistics />
        <Boost />
        <Footer />
      </main>
    </>
  );
}
