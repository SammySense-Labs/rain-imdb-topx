"use client";
import { useEffect, useState } from "react";
import { getTopMovies } from "../lib/getTopMovies";
import { Movie } from "../interfaces/movie";
import { MovieList } from "../components/MovieList";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";

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

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return <MovieList movies={movies} />;
}
