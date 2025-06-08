import { Movie } from "../interfaces/movie";
import { MoviePoster } from "./MoviePoster";
import { MovieDetailsHeader } from "./MovieDetailsHeader";
import { MovieOverview } from "./MovieOverview";
import { DirectorAndCast } from "./DirectorAndCast";
import { AdditionalInfo } from "./AdditionalInfo";

interface MovieDetailsProps {
  movie: Movie;
  onBack: () => void;
}

export function MovieDetails({ movie, onBack }: MovieDetailsProps) {
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
      <button onClick={onBack} className="text-gray-200 hover:underline mb-6 self-start flex items-center gap-2">
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
          <AdditionalInfo 
            country={country} 
            languages={languages} 
            budget={movie.budget} 
            revenue={movie.revenue} 
          />
        </div>
      </div>
    </div>
  );
} 