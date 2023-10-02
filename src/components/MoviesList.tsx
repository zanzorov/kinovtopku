"use client";
import useSWR from "swr";
import MovieCard from "./MovieCard";
import { useState } from "react";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MoviesList = () => {
  const [selected, setSelected] = useState("all");

  let query = selected === "all" ? "" : `?type=${selected}`;
  let url = "http://localhost:3001/movies" + query;

  const { data, error } = useSWR(url, fetcher);

  if (error)
    return (
      <div className="min-h-[80vh] text-center text-white text-4xl mt-4">
        Failed to load
      </div>
    );
  if (!data)
    return (
      <div className="min-h-[80vh] text-center text-white text-xl mt-4">
        Loading...
      </div>
    );

  return (
    <section className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-8 min-h-[80vh]">
      <h1 className="text-white font-bold text-2xl mt-8 mb-5">Топ 10</h1>
      <div className="mb-6">
        <select
          className="px-2 py-1 rounded-md cursor-pointer"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="movie">Фильм</option>
          <option value="series">Сериал</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default MoviesList;
