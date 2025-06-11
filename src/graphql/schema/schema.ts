import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    year: Int
    rating: Float
    genres: [String!]
    director: String
    plot: String
    poster: String
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
    searchMovies(query: String!): [Movie!]!
  }

  type Mutation {
    addMovie(
      title: String!
      year: Int
      rating: Float
      genres: [String!]
      director: String
      plot: String
      poster: String
    ): Movie!

    updateMovie(
      id: ID!
      title: String
      year: Int
      rating: Float
      genres: [String!]
      director: String
      plot: String
      poster: String
    ): Movie

    deleteMovie(id: ID!): Boolean!
  }
`;
