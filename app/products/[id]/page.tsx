import React from "react";
import getOneProduct from "@/lib/getOneProduct";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
        Product Detail
      </h1>
      <Card className="md:w-1/2 mx-auto">
        <CardHeader>
          <Image
            src={product?.imageUrl}
            alt={product?.productName}
            height={550}
            width={900}
          />
          <CardTitle>{productName}</CardTitle>
          <CardDescription>{brandName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-bold">Price: $</span>
            {price}
          </p>
          <p>{shortDescription}</p>
          <p>
            <span className="font-bold">Rating: </span>
            {rating}/10
          </p>
        </CardContent>
        <CardFooter className="row-span-1 flex justify-end gap-4">
          <Button>
            <Link href={`/buy/${id}`}>Buy Now</Link>
          </Button>
          <Button>
            <Link href={`/cart/${id}`}>
              <BiCart />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
