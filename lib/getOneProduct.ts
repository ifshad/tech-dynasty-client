// lib/getOneProduct.ts

interface Product {
  _id: string;
  productName: string;
  shortDescription: string;
  imageUrl: string; 
  brandName: string;
  price: number;
  rating: number;
}

export default async function getOneProduct(id: string): Promise<Product> {
  try {
    const response = await fetch(
      `https://tech-dynasty-server.vercel.app/products/${id}`,
      {
        next: {
          revalidate: 0,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export const revalidate = 1;