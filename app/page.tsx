import Image from "next/image";
import laptop from "@/public/Images/dmitry-chernyshov-mP7aPSUm7aE-unsplash-removebg-preview.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute flex z-0">
        <div className="w-48 h-48 border rounded-full bg-indigo-900 blur-3xl"></div>
        <div className="w-48 h-48 border rounded-full bg-indigo-900 blur-3xl"></div>
      </div>
      {/* Introductory Banner */}
      <div className="relative grid grid-cols-7 items-center z-10 border-x-2 border-b-2 p-3 shadow-lg">
        <div className="col-span-4 w-full">
          <h1 className="text-7xl font-extrabold w-5/6 leading-tight">
            Step into TechDynasty
          </h1>
          <p className="text-lg my-3 w-5/6">
            Explore the future of electronics with TechDynasty. Discover the
            latest laptops, smartphones, and cutting-edge gadgets that redefine
            innovation and style.
          </p>
          <Button>
            <Link href="/products">Buy Now</Link>
          </Button>
        </div>
        <div className="col-span-3">
          <Image src={laptop} alt="tech dynasty laptop"></Image>
        </div>
      </div>
    </div>
  );
}
