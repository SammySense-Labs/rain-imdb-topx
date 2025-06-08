import { Movie } from "../interfaces/movie";
import { MovieCard } from "./MovieCard";

interface MovieListProps {
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
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
            <img src="/tmdb-logo.svg" alt="TMDB Logo" className="h-5 inline"/>
          </a>
          <span className="text-[10px] text-gray-500">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </span>
        </div>
      </div>
    </div>
  );
} 