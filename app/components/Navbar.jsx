"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamMenu from "./HamMenu";
import PrimaryButton from "./PrimaryButton";

export default function () {
  return (
    <header className="relative w-full bg-transparent z-40 ">
      <nav className="text-white">
        <div className="px-4 max-w-7xl md:px-6 lg:px-8  xl:px-2    relative   mx-auto">
          <div className="flex   items-center  py-8 lg:py-8 ">
            {/* logo */}
            
              <img
                src="/images/Logo.png"
                alt="logo"
                className="w-10 md:w-12 lg:w-14 "
              />
            

            {/* nav links */}
            <ul className=" hidden mx-auto  lg:flex lg:gap-12 ps-12  text-white/80  md:text-lg">
              <li>
                <Link
                  href="/"
                 className={`hover:border-b  hover:border-[#FF541F] ${usePathname() === "/" ? "border-b border-[#FF541F] text-white" : ""}`}
                >
                  Home
                </Link>
              </li>
               <li>
                <Link
                  href="/"
                 className="hover:border-b hover:border-[#FF541F]"
                >
                  Services
                </Link>
              </li>
               <li>
                <Link
                  href="/"
                 className="hover:border-b hover:border-[#FF541F]"
                >
                  Contact us
                </Link>
              </li>
               <li>
                <Link
                  href="/"
                 className="hover:border-b hover:border-[#FF541F]"
                >
                  About us
                </Link>
              </li>
            </ul>

            <div className="flex ms-auto lg:ms-0 items-center gap-2">
              {/* login button */}
              <PrimaryButton href="" name="Login" />
              

              {/* hamburger menu */}
              <HamMenu />
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
