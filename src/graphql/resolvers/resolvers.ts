// Mock data - we'll replace this with real data later
const movies = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genres: ["Drama"],
    director: "Frank Darabont",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://example.com/shawshank.jpg",
  },
  {
    id: "2",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genres: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster: "https://example.com/godfather.jpg",
  },
];

export const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_: any, { id }: { id: string }) =>
      movies.find((movie) => movie.id === id),
    searchMovies: (_: any, { query }: { query: string }) =>
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase()) ||
          movie.director.toLowerCase().includes(query.toLowerCase())
      ),
  },

  Mutation: {
    addMovie: (_: any, movieData: any) => {
      const newMovie = {
        id: String(movies.length + 1),
        ...movieData,
      };
      movies.push(newMovie);
      return newMovie;
    },

    updateMovie: (_: any, { id, ...updates }: { id: string } & any) => {
      const index = movies.findIndex((movie) => movie.id === id);
      if (index === -1) return null;

      movies[index] = { ...movies[index], ...updates };
      return movies[index];
    },

    deleteMovie: (_: any, { id }: { id: string }) => {
      const index = movies.findIndex((movie) => movie.id === id);
      if (index === -1) return false;

      movies.splice(index, 1);
      return true;
    },
  },
};
