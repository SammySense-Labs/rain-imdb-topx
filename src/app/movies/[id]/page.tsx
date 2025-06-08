"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getMovieDetails } from "../../../lib/getMovieDetails";
import { Movie } from "../../../interfaces/movie";

const MoviePoster: React.FC<{ posterPath: string | null; title: string }> = ({ posterPath, title }) => {
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
    return (
        posterPath ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${TMDB_IMAGE_BASE}${posterPath}`} alt={title} className="rounded-2xl w-[340px] h-[480px] object-cover shadow-lg" />
        ) : (
        <div className="w-[340px] h-[480px] bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400 text-lg">No Image</div>
        )
    );
}

const MovieDetailsHeader: React.FC<{ movie: Movie }> = ({ movie }) => {
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

const MovieOverview: React.FC<{ overview?: string }> = ({ overview }) => (
  <div className="bg-[#3a265e]/80 rounded-xl p-5 text-white">
    <div className="font-bold mb-2 text-lg">Plot</div>
    <div>{overview}</div>
  </div>
);

const DirectorAndCast: React.FC<{ directors: string; cast: string }> = ({ directors, cast }) => (
  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex-1 bg-[#3a265e]/80 rounded-xl p-5 text-white">
      <div className="font-bold mb-2 flex items-center gap-2">
        <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        Director
      </div>
      <div>{directors}</div>
    </div>
    <div className="flex-1 bg-[#3a265e]/80 rounded-xl p-5 text-white">
      <div className="font-bold mb-2 flex items-center gap-2">
        <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
        Cast
      </div>
      <div>{cast}</div>
    </div>
  </div>
);

const AdditionalInfo: React.FC<{ country: string; languages: string; budget: number | undefined; revenue: number | undefined }> = ({ country, languages, budget, revenue }) => {
  // Format currency as '$X.XM' for large numbers, and '$X,XXX,XXX' for amounts less than 1 million
  const formatCurrency = (amount?: number) => {
    if (typeof amount !== "number" || amount <= 0) return "$0";
    if (amount >= 1_000_000) {
      const millions = amount / 1_000_000;
      // Show one decimal if not a round number, otherwise no decimal
      const display = millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
      return `$${display}M`;
    }
    return amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  };
  return (
    <div className="bg-[#3a265e]/80 rounded-xl p-5 text-white mt-2">
      <div className="font-bold mb-2 text-lg">Additional Information</div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div>Country:</div>
          <div>Language:</div>
          <div>Budget:</div>
          <div>Box Office Revenue:</div>
        </div>
        <div className="flex-1 text-right md:text-left">
          <div>{country}</div>
          <div>{languages}</div>
          <div>{formatCurrency(budget)}</div>
          <div>{formatCurrency(revenue)}</div>
        </div>
      </div>
    </div>
  );
};

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    getMovieDetails(id)
      .then(setMovie)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center text-white mt-20">Loading...</div>;
  if (error || !movie) return <div className="text-center text-red-500 mt-20">{error || "Movie not found"}</div>;

  // Get director(s)
  const directors = movie.credits?.crew.filter((c) => c.job === "Director").map((c) => c.name).join(", ") || "N/A";
  // Get main cast (first 4)
  const cast = movie.credits?.cast.slice(0, 4).map((c) => c.name).join(", ") || "N/A";
  // Get country
  const country = movie.production_countries?.map((c) => c.name).join(", ") || "N/A";
  // Get languages
  const languages = movie.spoken_languages?.map((l) => l.english_name).join(", ") || "N/A";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#231942] to-[#5e239d] px-4 py-10 flex flex-col items-center">
      <button onClick={() => router.back()} className="text-gray-200 hover:underline mb-6 self-start flex items-center gap-2">
        <span className="text-xl">&#8592;</span> Back to Movies
      </button>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Poster */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <MoviePoster posterPath={movie.poster_path} title={movie.title} />
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          <MovieDetailsHeader movie={movie} />
          <MovieOverview overview={movie.overview} />
          <DirectorAndCast directors={directors} cast={cast} />
          <AdditionalInfo country={country} languages={languages} budget={movie.budget} revenue={movie.revenue} />
        </div>
      </div>
    </div>
  );
}