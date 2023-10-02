import Image from "next/image";
import Link from "next/link";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow-sm rounded-md h-96 pb-2">
        <div className="h-3/4">
          <Image
            src={movie.poster}
            alt="moviecard image"
            width={500}
            height={600}
            className="rounded-t-md h-full object-fill"
          />
        </div>

        <div className="px-4 py-2">
          <div className="font-bold text-base mb-1">{movie.title}</div>
          <p className="text-gray-700 text-sm mb-1">{movie.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
