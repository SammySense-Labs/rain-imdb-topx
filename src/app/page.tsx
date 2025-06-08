"use client";
import { useEffect, useState } from "react";
import { getTopMovies } from "../lib/getTopMovies";
import { Movie } from "../interfaces/movie";
import { MovieCard } from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTopMovies()
      .then((movies) => {
        setMovies(movies);
        console.log(movies);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-2 text-center text-white drop-shadow">Top 10 IMDb Movies</h1>
      <p className="text-center text-lg text-gray-200 mb-10">Discover the highest-rated movies of all time, curated from IMDb&apos;s extensive database</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie, idx) => (
          <MovieCard key={movie.id} movie={movie} rank={idx + 1} />
        ))}
      </div>
      <div className="text-center text-xs text-gray-400 mt-10">Data provided by IMDb · Updated regularly</div>
    </div>
  );
}
