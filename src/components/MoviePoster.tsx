interface MoviePosterProps {
  posterPath: string | null;
  title: string;
}

export function MoviePoster({ posterPath, title }: MoviePosterProps) {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
  return posterPath ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`${TMDB_IMAGE_BASE}${posterPath}`} alt={title} className="rounded-2xl w-[340px] h-[480px] object-cover shadow-lg" />
  ) : (
    <div className="w-[340px] h-[480px] bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400 text-lg">No Image</div>
  );
} 