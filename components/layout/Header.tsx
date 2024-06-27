"use client";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { GiCrown } from "react-icons/gi";
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
import { BiLogOut, BiMenu } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

const Header: FC = () => {
  const { user, loading } = useAuthContext();
  console.log(user);

  const handleLogOut = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-2 md:p-4 flex items-center justify-between border-x-2 border-t-2 rounded-t mt-2 shadow-lg sticky top-0 z-50 backdrop-blur-lg">
      <div>
        <Link href="/" className="flex gap-3 items-center">
          <figure className="text-3xl">
            <GiCrown />
          </figure>
          <span className="font-bold text-lg">TechDynasty</span>
        </Link>
      </div>
      <div className="hidden md:flex">
        <Button variant="link">
          <Link href="/products">Buy Now</Link>
        </Button>
        <Button variant="link">
          <Link href="/seller">Become Seller</Link>
        </Button>
      </div>
      <div className="hidden md:flex items-center gap-3">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{user.email}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="absolute right-0 w-52 bg-white p-3 border rounded-sm shadow-md"
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
            <FaCartPlus />
          </figure>
        </Link>
      </div>
      <div className="md:hidden relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <BiMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="absolute right-0 w-52 bg-white p-3 border rounded-sm shadow-md"
          >
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/products">Buy Now</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/seller">Become Seller</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {user ? (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {user.email}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
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
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ) : (
                  <Button>
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/cart">Cart</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
