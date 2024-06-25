import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { GiCrown } from "react-icons/gi";

const Header: FC = () => {
  return (
    <div className="p-2 md:p-4 flex items-center md:justify-between border-x-2 border-t-2 rounded-t mt-2 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div>
        <Link href="/" className="flex gap-3 items-center">
          <figure className="text-3xl">
            <GiCrown />
          </figure>
          <span>TechDynasty</span>
        </Link>
      </div>
      <div>
        <Button variant="link">
          <Link href="/products">Buy Now</Link>
        </Button>
        <Button variant="link">
          <Link href="/seller">Become Seller</Link>
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <Link href="/cart">
          <figure className="text-3xl">
            <FaCartPlus />
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default Header;
