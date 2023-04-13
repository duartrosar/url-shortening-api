import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import LinkShortener from "@/components/LinkShortener";
import Statistics from "@/components/Statistics";
import Boost from "@/components/Boost";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor - Shortly URL shortening API Challenge</title>
      </Head>
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
