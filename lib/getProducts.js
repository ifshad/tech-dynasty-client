export default async function getProducts () {
  const result = await fetch('https://jsonplaceholder.typicode.com/comments',{
    next: {
      revalidate:0,
    }
  });

  return result.json();
}