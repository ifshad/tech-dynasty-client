import axios from "axios";

export default async function getProducts() {
  try {
    const timestamp = new Date().getTime();
    const response = await axios.get(
      `https://tech-dynasty-server.vercel.app/products?_=${timestamp}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
