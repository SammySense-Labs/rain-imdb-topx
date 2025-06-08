import React from "react";
import { Movie } from "../interfaces/movie";

interface MovieCardProps {
  movie: Movie;
  rank: number;
}

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const MovieCard: React.FC<MovieCardProps> = ({ movie, rank }) => {
  return (
    <div className="relative bg-[#231942]/80 rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
      {/* Rank badge */}
      <div className="absolute top-2 left-2 z-10">
        <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow">#{rank}</span>
      </div>
      {/* Rating badge */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full">
        <svg className="w-4 h-4 text-yellow-300 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        <span className="text-xs font-semibold text-white">{movie.vote_average.toFixed(1)}</span>
      </div>
      {/* Poster */}
      {movie.poster_path ? (
        <img
          src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-60 object-cover object-top"
        />
      ) : (
        <div className="w-full h-60 bg-gray-700 flex items-center justify-center text-gray-400 text-sm">No Image</div>
      )}
      {/* Info */}
      <div className="flex-1 flex flex-col justify-end p-4 bg-gradient-to-t from-[#231942]/90 via-[#231942]/60 to-transparent">
        <div className="font-semibold text-white text-base mb-1 truncate" title={movie.title}>{movie.title}</div>
        <div className="flex items-center gap-4 text-xs text-gray-300">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}; 