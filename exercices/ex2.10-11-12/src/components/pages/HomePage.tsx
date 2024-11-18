import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import TitleMovieListView from "../TitleMovieListView";
import PageTitle from "../PageTitle";

const HomePage = () => {
  const { movies} : MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <TitleMovieListView movies={movies} />
    </div>
  );
};
export default HomePage;
