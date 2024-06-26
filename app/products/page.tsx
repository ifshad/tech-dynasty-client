import React from "react";
import getProducts from "@/lib/getProducts";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <div>
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
          {products.map((product: any) => (
            <Card key={product._id} className="grid grid-rows-3">
              <CardHeader className="row-span-1">
                {/* <Image src={product.imageUrl} alt={product.productName} width={60} height={40}/> */}
              </CardHeader>
              <CardContent className="row-span-1">
                <CardTitle>{product.productName}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
              </CardContent>
              <CardFooter className="row-span-1">
                <Button>
                  <Link href={`/products/${product._id}`}>Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
