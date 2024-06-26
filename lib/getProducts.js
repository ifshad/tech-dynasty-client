export default async function getProducts () {
  const result = await fetch('https://tech-dynasty-server.vercel.app/products',{
    next: {
      revalidate:0,
    }
  });

  return result.json();
}