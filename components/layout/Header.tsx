"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaBagShopping,
  FaCartPlus,
  FaCircleDollarToSlot,
} from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useAuthContext } from "@/providers/AuthContext";
import { BiLogIn, BiLogOut, BiMenu } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import logo from "@/public/Images/TechDynasty logo.png";
import Image from "next/image";

const Header: FC = () => {
  const { user, loading } = useAuthContext();
  console.log(user);

  const handleLogOut = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-2 flex items-center justify-between border-x-2 border-t-2 rounded-t border-[#D9D9D9]/20 mt-2 shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-[#D9D9D9] bg-opacity-[13.5%] text-white">
      <div>
        <Link href="/" className="flex gap-3 items-center">
          <Image src={logo} alt="TechDynasty Logo" height={60} />
          <span className="font-bold text-lg">TechDynasty</span>
        </Link>
      </div>
      <div className="hidden md:flex">
        <Button variant="link" className="text-white">
          <Link href="/products">Buy Now</Link>
        </Button>
        <Button variant="link" className="text-white">
          {user ? (
            <Link href="/seller">Become Seller</Link>
          ) : (
            <Link href="/login">Become Seller</Link>
          )}
        </Button>
      </div>
      <div className="hidden md:flex items-center gap-3">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-white bg-[#1C2349]">{user.email}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-52 text-white bg-[#1C2349] rounded-sm shadow-md"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Button
                    variant="ghost"
                    onClick={handleLogOut}
                    className="w-full gap-3 justify-start"
                  >
                    <BiLogOut /> Logout
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}
        <Link href="/cart">
          <figure className="text-3xl">
            {user ? (
              <Link href="/seller">
                <FaCartPlus />
              </Link>
            ) : (
              <Link href="/login">
                <FaCartPlus />
              </Link>
            )}
          </figure>
        </Link>
      </div>
      <div className="md:hidden relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {user ? (
              <Button className="rounded-full">{user.email?.slice(0,1)}</Button>
            ) : (
              <Button>
                <BiMenu />
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="absolute right-0 w-52 bg-[#1C2349] p-3 border rounded-sm shadow-md"
          >
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link className="flex items-center gap-3" href="/products">
                  <FaBagShopping /> Buy Now
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {user ? (
                  <Link className="flex items-center gap-3" href="/seller">
                    <FaCircleDollarToSlot /> Become Seller
                  </Link>
                ) : (
                  <Link className="flex items-center gap-3" href="/login">
                    <FaCircleDollarToSlot /> Become Seller
                  </Link>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {user ? (
                  <Link className="flex gap-3 items-center" href="/cart">
                    <FaCartPlus /> Cart
                  </Link>
                ) : (
                  <Link className="flex gap-3 items-center" href="/login">
                    <FaCartPlus /> Cart
                  </Link>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {user ? (
                <DropdownMenuItem>
                  <button
                    onClick={handleLogOut}
                    className="flex gap-3 items-center"
                  >
                    <BiLogOut /> Logout
                  </button>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem>
                  <Link href="/login" className="flex gap-3 items-center">
                    <BiLogIn /> Login
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
