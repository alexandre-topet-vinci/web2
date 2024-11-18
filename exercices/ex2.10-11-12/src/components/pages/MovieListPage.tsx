import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import AddMovieForm from "../AddMovieForm";
import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";

const MovieListPage = () => {
const { movies, onMovieAdded} : MovieContext = useOutletContext();

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} />

      <AddMovieForm onMovieAdded={onMovieAdded} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
