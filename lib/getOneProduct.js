export default async function getOneProduct(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  return result.json();
}
