import React from "react";
import getOneProduct from "@/lib/getOneProduct";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import Image from "next/image";

export default async function ProductDetailsPage({ params }: any) {
  const { id } = params;
  const product = await getOneProduct(id);
  const { productName, imageUrl, brandName, price, shortDescription, rating } =
    product;
  console.log(product);
  return (
    <div className="">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center text-white/95">
        Product Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-5 relative">
        <div className="absolute -bottom-4 md:bottom-4 md:left-[600px]">
          <span className="bg-[#00FFE0] px-3 py-1 rounded-full text-gray-800">{rating}/10</span>
        </div>
        <div className="bg-[#D9D9D9] rounded-md p-2">
          <Image
            src={product?.imageUrl}
            alt={product?.productName}
            height={550}
            width={900}
          />
        </div>
        <div className="grid grid-rows-4 md:pl-16 md:pt-10">
          <div className="row-span-2">
            <p className="text-white text-5xl mb-3">{productName}</p>
            <div>
              <p className="text-white/90 text-xl mb-3 bg-cyan-600 rounded-sm w-fit px-3 py-1">
                {brandName}
              </p>
            </div>
            <p className="text-white/85 text-2xl">{shortDescription}</p>
          </div>
          <div className="flex gap-4 items-center row-span-1">
            <span className="font-bold text-3xl text-[#00FFE0]">${price}</span>
          </div>
          <div className="flex items-center gap-5 justify-end row-span-1 pr-6">
            <Button>
              <Link href={`/buy/${id}`}>Buy Now</Link>
            </Button>
            <Button>
              <Link href={`/cart/${id}`}>
                <BiCart />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
