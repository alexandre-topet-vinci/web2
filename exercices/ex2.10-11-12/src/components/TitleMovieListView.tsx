import { Movie } from "../types";
import "./MovieListView.css";
import MovieTitle from "./MovieTitle";

interface MovieListViewProps {
  movies: Movie[];
}

const TitleMovieListView = ({ movies }: MovieListViewProps) => {
  return (
    <div >
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <MovieTitle key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default TitleMovieListView;