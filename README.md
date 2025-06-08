# IMDb Top Movies Viewer

A Next.js application that displays the top 10 movies from IMDb with the highest scores. Each movie can be clicked to view its details.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Query
- Jest + React Testing Library
- Playwright

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your TMDB API key:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

### Unit Tests
```bash
npm test
```

### Watch Mode
```bash
npm run test:watch
```

### End-to-End Tests
```bash
npm run test:e2e
```

### End-to-End Tests with UI
```bash
npm run test:e2e:ui
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
└── __tests__/        # Unit tests
e2e/                  # End-to-end tests
```

## Features

- Display top 10 movies from IMDb
- Movie detail pages
- Responsive design
- Client-side data fetching
- Server-side data fetching (optional implementation)
