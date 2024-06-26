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
          <CardTitle>{productName}</CardTitle>
          <CardDescription>{brandName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-bold">Price: </span>
            {price}
          </p>
          <p>{shortDescription}</p>
        </CardContent>
        <CardFooter>
          <p>
            <span className="font-bold">Rating: </span>
            {rating}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
