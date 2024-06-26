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

export default async function ProductsPage() {
  const comments = await getProducts();
  return (
    <div>
      <div>
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-4/5 mx-auto">
          {comments.map((comment: any) => (
            <Card key={comment.id} className="">
              <CardHeader>
                <CardTitle>{comment.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {comment.body.length > 60
                    ? `${comment.body.substring(0, 60)}...`
                    : comment.body}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button>
                  <Link href={`/products/${comment.id}`}>Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
