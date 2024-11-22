import MovieList from "./movieList";

interface CinemaProps {
  name: string;
}

const Cinema = ({name}: CinemaProps) => (
  <div>
    <h2>{name}</h2>
    <MovieList movies={[]} />
  </div>
  );

export default Cinema;
