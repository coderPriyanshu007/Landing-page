import FooterLinks from "./FooterLinks";
import Link from "next/link";
import { Facebook, Github, Twitter, Mail } from "lucide-react";
export default function () {
  return (
    <footer className="space-y-4 py-10  bg-white/5  mt-10">
      <div className="max-w-7xl px-4 md:px-6 lg:px-8 xl:px-2  space-y-4    md:py-20 mx-auto">
        <div className="space-y-4 lg:space-y-6 lg:flex min-h-48">
          <div className="lg:max-w-xs space-y-4">
            <h1 className="text-white font-bold text-xl  md:text-2xl lg:text-3xl">
              About Us
            </h1>
            <p className="text-[#BCBCBC] text-sm md:text-base ">
              We’re a team of designers, engineers, and innovators building AI
              tools that empower anyone to turn imagination into stunning
              visuals—faster, smarter, and effortlessly.
            </p>
          </div>

          <div className="h-[1.5px] lg:hidden w-full bg-gradient-to-r from-white/4 via-white/20 to-white/4"></div>
          <div className="flex flex-col md:flex-row md:justify-between lg:ms-20 flex-1 gap-6   ">
            <FooterLinks title="Useful Links">
              <ul className="text-[#BCBCBC] text-sm md:text-base h-full justify-between gap-2 mb-4 flex flex-col ">
                <li>
                  <Link href="">About</Link>
                </li>
                <li>
                  <Link href="">Services</Link>
                </li>
                <li>
                  <Link href="">Team</Link>
                </li>
                <li>
                  <Link href="">Prices</Link>
                </li>
              </ul>
            </FooterLinks>
            <FooterLinks title="Help">
              <ul className="text-[#BCBCBC] text-sm md:text-base gap-2 h-full justify-between mb-4 flex flex-col ">
                <li>
                  <Link href="">Customer Support</Link>
                </li>
                <li>
                  <Link href="">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="">Contact us</Link>
                </li>
              </ul>
            </FooterLinks>
            <FooterLinks title="Connect With Us">
              <ul className="text-[#BCBCBC] text-sm md:text-base gap-2 h-full justify-between mb-4 flex flex-col">
                <li>
                  <Link href="">27 Division St, New York, NY 10002, USA</Link>
                </li>
                <li>
                  <Link href="">+123 324 2653</Link>
                </li>
                <li>
                  <Link href="">username@gmail.com</Link>
                </li>
              </ul>
            </FooterLinks>
          </div>
        </div>
        <div className="border md:mt-8  border-[#FF541F]/40 "></div>
        <div className="text-white/90  md:flex  md:justify-between md:items-center space-y-4 lg:space-y-0 mt-4 md:mt-8">
          <div className="text-sm md:text-base flex items-center lg:text-lg">
            &copy; 2025 All rights reserved.
          </div>
          <div className="flex gap-2">
            <div className="p-2 rounded-full border border-[#FF541F]">
              <Facebook className="text-[#FF541F] size-4 md:size-6" />
            </div>
            <div className="p-2 rounded-full border border-[#FF541F]">
              <Github className="text-[#FF541F] size-4 md:size-6" />
            </div>
            <div className="p-2 rounded-full border border-[#FF541F]">
              <Twitter className="text-[#FF541F] size-4 md:size-6" />
            </div>
            <div className="p-2 rounded-full border border-[#FF541F]">
              <Mail className="text-[#FF541F] size-4 md:size-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
