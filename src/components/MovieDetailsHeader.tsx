import { Movie } from "../interfaces/movie";

interface MovieDetailsHeaderProps {
  movie: Movie;
}

export function MovieDetailsHeader({ movie }: MovieDetailsHeaderProps) {
  const releaseYear = movie.release_date?.slice(0, 4);
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full flex items-center gap-1 text-lg">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
          {movie.vote_average.toFixed(1)}
        </span>
        <span className="bg-[#3a265e] text-white px-3 py-1 rounded-full text-sm">{releaseYear}</span>
        {movie.runtime && <span className="bg-[#3a265e] text-white px-3 py-1 rounded-full text-sm">{movie.runtime} min</span>}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {movie.genres?.map((g) => (
          <span key={g.id} className="bg-[#3a265e] text-white px-3 py-1 rounded-full text-xs">{g.name}</span>
        ))}
      </div>
    </div>
  );
} 