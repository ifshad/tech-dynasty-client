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
  const comment = await getOneProduct(id);
  const { postId, name, email, body } = comment;
  console.log(comment);
  return (
    <div className="">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold lg:m-5 md:m-3 m-2 text-center">
        Product Detail
      </h1>
      <Card className="md:w-1/2 mx-auto">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-bold">Comment: </span>
            {body}
          </p>
          <p>
            <span className="font-bold">PostID: </span>
            {postId}
          </p>
        </CardContent>
        <CardFooter>
          <p>
            <span className="font-bold">ID: </span>
            {id}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
