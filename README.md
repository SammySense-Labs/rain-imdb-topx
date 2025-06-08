# IMDb Top Movies Viewer 🎞️

A Next.js application that displays the top 10 movies from IMDb with the highest scores. Each movie can be clicked to view its details.

## Tech Stack

- [Next.js](https://nextjs.org/blog/next-14)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)
- [TMDB API](https://www.themoviedb.org/settings/api)
- [Playwright](https://playwright.dev/) for e2e testing

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
