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
import { BiCart } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileWarningIcon } from "lucide-react";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <div>
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center text-white/95">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
          {products.map((product: any) => (
            <Card
              key={product._id}
              className="grid grid-rows-7 bg-[#443B5D] border-2 border-transparent text-white relative shadow shadow-white/20 hover:shadow-md hover:shadow-white/40"
            >
              {/* <div className="absolute inset-0  rounded-sm bg-gradient-to-tr from-purple-400 via-rose-400 to-yellow-400 filter blur-lg -z-50"></div> */}
              <CardHeader className="row-span-4">
                {product.imageUrl &&
                (product.imageUrl.startsWith("http://") ||
                  product.imageUrl.startsWith("https://")) ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    height={250}
                    width={400}
                  />
                ) : (
                  <span className="w-full h-full flex justify-center items-center"><FileWarningIcon /> No Image Available</span>
                )}
              </CardHeader>
              <CardContent className="row-span-2">
                <CardTitle>{product.productName}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
                <CardDescription>Price: ${product.price}</CardDescription>
              </CardContent>
              <CardFooter className="row-span-1 flex justify-between">
                <Button>
                  <Link href={`/products/${product._id}`}>Details</Link>
                </Button>
                <Button>
                  <Link href={`/}`}>Buy Now</Link>
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>
                        <Link href={`/cart}`}>
                          <BiCart />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
