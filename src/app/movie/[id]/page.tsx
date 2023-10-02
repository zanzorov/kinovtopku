import getMovie from "@/fetchData/getMovie";
import Image from "next/image";
import Gallery from "@/components/Gallery";

const MovieDetails = async ({ params }: { params: { id: number } }) => {
  const movieData: Promise<Movie> = getMovie(params.id);
  const movie = await movieData;

  return (
    <main className="container max-w-4xl mx-auto pt-6">
      <section className="p-3 flex gap-2 flex-col md:flex-row bg-orange-50">
        <div className="basis-1/2">
          <Image
            src={movie.poster}
            alt="movie poster"
            width={380}
            height={380}
            className="rounded-md"
          />
        </div>

        <div className="basis-1/2">
          <h1 className="font-bold text-xl my-2">{movie.title}</h1>
          <p className="text-gray-600 text-sm mt-4">{movie.description}</p>
          <p className="mt-5 text-gray-600 text-sm">
            Жанр: <span className="font-bold">{movie.genre}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Год выхода: <span className="font-bold">{movie.date}</span>
          </p>
          <p className="mt-5 text-gray-600 text-sm">
            Актеры:{" "}
            <span className="font-bold">
              {movie.cast.map((cast) => cast.actor).join(", ")}
            </span>
          </p>
          <p className="mt-2 text-gray-600 text-sm">Режиссер: <span className="font-bold">{movie.director}</span></p>
        </div>
      </section>
      <section className="mt-8 p-2">
        <h1 className="font-bold text-xl mb-2">Галерея</h1>
        <Gallery movie={movie} />
      </section>
    </main>
  );
};

export default MovieDetails;
