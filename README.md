# IMDb Top Movies Viewer

A Next.js application that displays the top 10 movies from IMDb with the highest scores. Each movie can be clicked to view its details.

## Tech Stack

- [Next.js](https://nextjs.org/blog/next-14)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)
- [TMDB API](https://www.themoviedb.org/settings/api)

## Getting Started

1. Clone the repository:
   ```
   git clone smth
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

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   └── movies/         # Movie routes
│       └── [id]/       # Dynamic movie detail pages
├── components/         # React components
├── lib/               # Utility functions and API clients
└── interfaces/        # TypeScript interfaces
```

## Features

- Display top 10 movies from IMDb
- Movie detail pages
- Responsive design
- Client-side data fetching
