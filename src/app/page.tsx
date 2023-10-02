import Hero from "@/components/Hero";
import MoviesList from "@/components/MoviesList";

export default function Home() {
  return (
    <main className="bg-gray-700">
      <Hero />
      <MoviesList />
    </main>
  );
}
