interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface NewMovie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (movie: NewMovie) => void;
}

export type { Movie, MovieContext, NewMovie };