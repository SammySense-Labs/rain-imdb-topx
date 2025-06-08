export type Genre = {
  id: number;
  name: string;
};

export type CastMember = {
  id: number;
  name: string;
  character: string;
};

export type CrewMember = {
  id: number;
  name: string;
  job: string;
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  runtime?: number;
  overview?: string;
  genres?: Genre[];
  credits?: {
    cast: CastMember[];
    crew: CrewMember[];
  };
  original_language?: string;
  production_countries?: { iso_3166_1: string; name: string }[];
  spoken_languages?: { iso_639_1: string; english_name: string }[];
  budget?: number;
  revenue?: number;
};
