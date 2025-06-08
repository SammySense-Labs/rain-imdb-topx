export async function getTopMovies() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!apiKey) throw new Error("TMDB API key is missing");
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();
  return data.results.slice(0, 10);
}
