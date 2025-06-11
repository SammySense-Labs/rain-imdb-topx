# IMDb Top Movies Viewer 🎞️

A Next.js application that displays the top 10 movies from IMDb with the highest scores. Each movie can be clicked to view its details.

## Tech Stack

- [Next.js](https://nextjs.org/blog/next-14)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)
- [TMDB API](https://www.themoviedb.org/settings/api)
- [Playwright](https://playwright.dev/) for e2e testing
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- [Docker](https://github.com/docker) and [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone the repository:
   ```
   git clone git@github.com:SammySense-Labs/rain-imdb-topx.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env.local` (e.g. by using `.env.example`) and fill in the necessary values:
   ```
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser
6. Install and run PostgreSQL using [Docker Compose](./docker-compose.yml):
```bash
docker compose up -d
```
7. You can connect to it using any PostgreSQL client with these connection details:
- `Host: localhost`
- `Port: 5434`
- `Database: rain_imdb`
- `Username: rain_user`
- `Password: rain_password`

## Testing

Run e2e tests with Playwright:
```bash
npm run test:e2e
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   └── movies/         # Movie routes
│       └── [id]/       # Dynamic movie detail pages
├── components/         # React components
├── lib/               # Utility functions and API clients
├── interfaces/        # TypeScript interfaces
└── tests/            # End-to-end tests
    └── e2e/          # Playwright test files
```

## Features

- Display top 10 movies from IMDb
- Provide a detail page to each of the top movies
- Responsive design
- Client-side data fetching
- E2E testing with Playwright

## Technical Decisions and Trade-offs

### Architecture
- **Next.js**: Chosen as it provides the best balance of features (e.g. file-system based routing makes it easier to create movie detail pages), developer experience, and performance for this challenge. Another alternative with much faster DX and simpler setup would be "Vite + React".
- **Client-side Data Fetching**: Implemented for immediate user feedback, though this means we don't benefit from Next.js's static generation capabilities.
- **TypeScript**: Added for type safety and better developer experience, despite the initial setup overhead.

### API Integration
- **TMDB API**: Selected over direct IMDb API due to better documentation and reliability, though this means we're not using the official IMDb data source.

## GraphQL API

### Open the GraphQL playground to test the API

1. Starting your development server:
```bash
npm run dev
```
2. Open [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql) in your browser
3. Use this example query:
```graphql
query {
  movies {
    id
    title
    year
    rating
    director
  }
}
```
You should get this response:
```json
{
  "data": {
    "movies": [
      {
        "id": "1",
        "title": "The Shawshank Redemption",
        "year": 1994,
        "rating": 9.3,
        "director": "Frank Darabont"
      },
      {
        "id": "2",
        "title": "The Godfather",
        "year": 1972,
        "rating": 9.2,
        "director": "Francis Ford Coppola"
      }
    ]
  }
}
```

### GraphQL API endpoints

_TBD_