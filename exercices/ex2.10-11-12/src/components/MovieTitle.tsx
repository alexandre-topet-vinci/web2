import { useState } from "react";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieTitle = ({ movie }: MovieItemProps) => {
  return (
    <li onClick={() => }>
      <p>
        <strong>{movie.title}</strong>
      </p>
    </li>
  );
};

export default MovieTitle;
