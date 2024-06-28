import Link from "next/link";
import React, { FC } from "react";
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "@/public/Images/TechDynasty logo.png";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className="w-full mt-2 pt-3 md:pt-8 text-white relative">
      <div className="py-3 absolute inset-0 filter bg-[#C44BD9]/20 blur-2xl"></div>
      <div className="border border-slate-300 mb-4 md:mb-12"></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4 md:mb-12">
        <div className="col-span-2 md:col-span-3">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="TechDynasty Logo" height={60} />
            <h1 className="text-2xl font-semibold">TechDynasty</h1>
          </div>
          <p className="opacity-70 md:w-4/6">
            Your one-stop shop for the latest and greatest in electronics.
            Discover, shop, and enjoy top-quality products at unbeatable prices.
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="font-semibold">Policies</h1>
          <ul className="">
            <li>
              <Link href="/" className="opacity-70 hover:opacity-90">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/" className="opacity-70 hover:opacity-90">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/" className="opacity-70 hover:opacity-90">Cookie Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="mb-1 font-semibold">Social</h1>
          <div className="flex gap-5">
            <Link href="/" className="opacity-70 hover:opacity-90">
              <FaFacebook />
            </Link>
            <Link href="/" className="opacity-70 hover:opacity-90">
              <FaXTwitter />
            </Link>
            <Link href="/" className="opacity-70 hover:opacity-90">
              <FaYoutube />
            </Link>
            <Link href="/" className="opacity-70 hover:opacity-90">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <p className="flex items-center justify-center opacity-70">
          &copy; {new Date().getFullYear()} TechDynasty | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
