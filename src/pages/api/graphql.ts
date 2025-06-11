import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/schema/schema";
import { resolvers } from "@/graphql/resolvers/resolvers";

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create the handler
const handler = startServerAndCreateNextHandler(server);

// Export the handler for Next.js API routes
export default handler;
