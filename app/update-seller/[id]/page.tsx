"use client";
import { Button } from "@/components/ui/button";
import getOneProduct from "@/lib/getOneProduct";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  productName: string;
  shortDescription: string;
  imageUrl: string;
  brandName: string;
  price: number;
  rating: number;
}

interface ProductDetailProps {
  params: any;
}

export default function UpdateSeller({ params }: ProductDetailProps) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log(product)

  const {
    productName,
    brandName,
    imageUrl,
    shortDescription,
    price,
    rating,
  }: any = product;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getOneProduct(id);
        setProduct(fetchedProduct);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const productName: any = form.get("productName");
    const imageUrl: any = form.get("imageUrl");
    const brandName: any = form.get("brandName");
    const price: any = form.get("price");
    const shortDescription: any = form.get("shortDescription");
    const rating: any = form.get("rating");

    const productInfo: object = {
      productName,
      imageUrl,
      brandName,
      price,
      shortDescription,
      rating,
    };

    await axios.put(`https://tech-dynasty-server.vercel.app/products/${id}`, {
      productName: productName,
      imageUrl: imageUrl,
      brandName: brandName,
      price: price,
      shortDescription: shortDescription,
      rating: rating,
    });
    e.target.reset();
  }
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2">
        Edit product!
      </h1>
      {/* Registration Form */}
      <div className="bg-white rounded-xl px-6 py-8 border w-11/12 md:w-4/6 m-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
          <div className="relative">
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="imageUrl"
              required
              defaultValue={imageUrl}
            />
            <label
              htmlFor="imageUrl"
              className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0  transition-all duration-200"
            >
              Image URL
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="productName"
              id="productName"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="productName"
              required
              defaultValue={productName}
            />
            <label
              htmlFor="productName"
              className="absolute left-3 -top-3 cursor-text  bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0  transition-all duration-200"
            >
              Product Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="brandName"
              id="brandName"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="brandName"
              required
              defaultValue={brandName}
            />
            <label
              htmlFor="brandName"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Brand Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="shortDescription"
              id="shortDescription"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="shortDescription"
              required
              defaultValue={shortDescription}
            />
            <label
              htmlFor="shortDescription"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Short Description
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="price"
              id="price"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="price"
              required
              defaultValue={price}
            />
            <label
              htmlFor="price"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Price
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="rating"
              id="rating"
              className="p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-primary"
              placeholder="rating"
              required
              defaultValue={rating}
            />
            <label
              htmlFor="rating"
              className="absolute left-3 -top-3 cursor-text bg-secondary-color px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium peer-placeholder-shown:bg-white peer-focus:bg-white  peer-focus:-translate-y-0 transition-all duration-200"
            >
              Rating
            </label>
          </div>
          <Button className="w-full">
            {/* {loading ? "Claiming..." : "Claim your spot now!"} */}
            Add Product
          </Button>
        </form>
      </div>
      {/* Temporary Output */}
      <div>
        To manage your{" "}
        <Link href="/seller-dashboard">products, click here</Link>
      </div>
    </div>
  );
}
