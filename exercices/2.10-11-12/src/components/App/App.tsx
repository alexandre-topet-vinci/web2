
import './App.css'
import { Outlet, useNavigate } from "react-router-dom";
import Cinema from "../Main/Cinema";
import MovieList from "../Main/movieList";
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movie")}>Movie</button>
    </nav>
  )
}
const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

const CinemaPage = () => {
  return (
    <div>
      <h2>Cinema Page</h2>
      <p>Welcome to the Cinema Page!</p>
      <Cinema name="Default Cinema Name" />
    </div>
  );
};

const MovieListPage = () => {
  return (
    <div>
      <h2>Movie List Page</h2>
      <p>Welcome to the Movie List Page!</p>
      <MovieList movies={[]} />
    </div>
  );
};


const App = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);


export default App
export { HomePage, CinemaPage, MovieListPage }
