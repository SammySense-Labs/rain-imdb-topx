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
      .then(setMovies)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#231942] to-[#5e239d] px-4 py-10 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl font-bold mb-2 text-center text-white drop-shadow">Top 10 IMDb Movies</h1>
        <p className="text-center text-lg text-gray-200 mb-10">Discover the highest-rated movies of all time, curated from IMDb&apos;s extensive database</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie, idx) => (
            <MovieCard key={movie.id} movie={movie} rank={idx + 1} />
          ))}
        </div>
        <div className="text-center text-xs text-gray-400 mt-10 flex flex-col items-center gap-2">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          > 
          <span>Data provided by</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tmdb-logo.svg" alt="TMDB Logo" className="h-5" style={{ display: "inline" }}/>
          </a>
          <span className="text-[10px] text-gray-500">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </span>
        </div>
      </div>
    </div>
  );
}
