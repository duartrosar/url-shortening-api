import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>("bg-transparent");
  const router = useRouter();

  useEffect(() => {
    const closeMobileMenu = () => setMobileMenuOpen(false);
    router.events.on("routeChangeComplete", closeMobileMenu);
    return () => {
      router.events.off("routeChangeComplete", closeMobileMenu);
    };
  }, []);

  const handleNav = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full h-24 fixed bg-[white] transition duration-200 z-10">
      <div className="w-full flex justify-between px-6 pt-10 pb-6 lg:pt-12 lg:pb-8 sm:container mx-auto lg:px-14">
        <div className="flex gap-12">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-[120px] object-contain" />
          </Link>
          <ul className="hidden lg:flex gap-8 items-center ">
            <li className="desktop-menu-item">
              <Link href="/">Features</Link>
            </li>
            <li className="desktop-menu-item">
              <Link href="/">Pricing</Link>
            </li>
            <li className="desktop-menu-item">
              <Link href="/">Resources</Link>
            </li>
          </ul>
        </div>
        {/* Desktop Menu */}
        <div>
          <div className="hidden lg:flex ">
            <ul className="hidden lg:flex gap-8 items-center ">
              <li className="desktop-menu-item">
                <Link href="/">Login</Link>
              </li>
              <li className="bg-cyan rounded-full py-2 px-6 text-[15px] btn hover:bg-[/9AE3E3]">
                <Link href="/">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden text-gray-violet" onClick={handleNav}>
            {mobileMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="w-full absolute top-24 left-0 px-6 lg:hidden">
          <div className="bg-dark-violet rounded-lg w-full px-6 py-10">
            <ul>
              <Link href="/">
                <li className="mobile-menu-item mb-[30px]">Features</li>
              </Link>
              <Link href="/">
                <li className="mobile-menu-item mb-[30px]">Pricing</li>
              </Link>
              <Link href="/">
                <li className="mobile-menu-item mb-[30px]">Resources</li>
              </Link>
            </ul>
            <div className="border-b border-b-gray-violet opacity-25 mb-[30px]"></div>
            <ul>
              <Link href="/">
                <li className="mobile-menu-item mb-6">Login</li>
              </Link>
              <Link href="/">
                <li className="bg-cyan rounded-full pt-3 pb-2 text-lg btn hover:bg-[/9AE3E3]">
                  Sign Up
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
