import { useState, SyntheticEvent } from "react";
import { Movie } from "../../types";
import MovieList from "./movieList";

const defaultMovies = [
    {
        id: 1,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        duration: 175,
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        description: "Two imprisoned...",
        duration: 142,
    },
    {
        id: 3,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham...",
        duration: 152,
    },
    {
        id: 4,
        title: "12 Angry birds",
        director: "Sidney Lumet",
        description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        duration: 96,
    },
    {
        id: 5,
        title: "Schindler's List",
        director: "Steven Spielberg",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution",
        duration: 195,
    }
];

const Main = () => {
    const [movie, setMovie] = useState("");
    const [movies, setMovies] = useState(defaultMovies);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        console.log("submit:", form.movie.value, form.description.value);
        const newMovie = {
            id: nextMovieId(movies),
            title: movie,
            director: form.director.value,
            description: form.description.value,
            duration: form.duration.value
        };

        setMovies([...movies, newMovie]);

    };

    const handleMovieChange = (e: SyntheticEvent) => {
        const movieInput = e.target as HTMLInputElement;
        console.log("change in movieInput:", movieInput.value);
        setMovie(movieInput.value);
    };

    return (
        <div className="main">
            <h1>Movie List</h1>
            <MovieList movies={movies} />
            <form onSubmit={handleSubmit}>
                <label>
                    Movie:
                    <input type="text" name="movie" onChange={handleMovieChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" />
                </label>
                <label>
                    Director:
                    <input type="text" name="director" />
                </label>
                <label>
                    Duration:
                    <input type="number" name="duration" />
                </label>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

const nextMovieId = (movies: Movie[]) => {
    return movies.length ? Math.max(...movies.map((movie) => movie.id)) + 1 : 1;
}

export default Main;
