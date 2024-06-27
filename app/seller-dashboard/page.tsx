"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getProducts from "@/lib/getProducts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface Product {
  _id: string;
  productName: string;
  shortDescription: string;
  imageUrl: string;
  brandName: string;
  price: number;
  rating: number;
}

export default function SellerDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  const handleDeleteClick = (_id: any) => {
    console.log(_id);
    axios.delete(`https://tech-dynasty-server.vercel.app/products/${_id}`);
  };

  return (
    <div>
      <div>
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
          Manage Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
          {products.map((product: any) => (
            <Card key={product._id} className="grid grid-rows-7">
              <CardHeader className="row-span-4">
                <Image
                  src={product?.imageUrl}
                  alt={product?.productName}
                  height={250}
                  width={400}
                />
              </CardHeader>
              <CardContent className="row-span-2 flex flex-col">
                <CardTitle>{product.productName}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
                <CardDescription>{product.price}</CardDescription>
              </CardContent>
              <CardFooter className="row-span-1 flex justify-between">
                <Button>
                  <Link href={`/products/${product._id}`}>Details</Link>
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button>
                        <Link
                          className="flex gap-1"
                          href={`/update-seller/${product._id}`}
                        >
                          <FiEdit />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        onClick={() => {
                          handleDeleteClick(product._id);
                        }}
                        variant="destructive"
                      >
                        <FaTrash />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
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
