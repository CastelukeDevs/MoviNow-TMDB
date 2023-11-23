export type IMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[] | IGenre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type IMovieLite = {
  id: number;
  poster_path: string;
  title: string;
};

export type IGenre = {
  id: number;
  name: string;
};
