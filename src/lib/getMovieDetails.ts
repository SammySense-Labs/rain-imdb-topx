export async function getMovieDetails(id: number | string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!apiKey) throw new Error("TMDB API key is missing");
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}
