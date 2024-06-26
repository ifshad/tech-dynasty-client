export default async function getOneProduct(id) {
  const result = await fetch(
    `https://tech-dynasty-server.vercel.app/products/${id}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  return result.json();
}
