const getMovie = async (id: number) => {
  const res = await fetch(`http://localhost:3001/movies/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export default getMovie;
