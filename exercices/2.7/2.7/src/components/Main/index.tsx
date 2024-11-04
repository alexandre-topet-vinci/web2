import { useState, SyntheticEvent } from "react";
import { Movie } from "../../types";
import MovieList from "./movieList";

const defaultMovies:Movie[] = [
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
    const [description, setDescription] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("submit:", movie, description);
        const newMovie = {
            id: nextMovieId(movies),
            title: movie,
            director: director,
            description: description,
            duration: duration
        };

        setMovies([...movies, newMovie]);

    };

    const handleMovieChange = (e: SyntheticEvent) => {
        const movieInput = e.target as HTMLInputElement;
        console.log("change in movieInput:", movieInput.value);
        setMovie(movieInput.value);
    };

    const handleDescriptionChange = (e: SyntheticEvent) => {
        const descriptionInput = e.target as HTMLInputElement;
        console.log("change in descriptionInput:", descriptionInput.value);
        setDescription(descriptionInput.value);
    }

    const handleDirectorChange = (e: SyntheticEvent) => {
        const directorInput = e.target as HTMLInputElement;
        console.log("change in directorInput:", directorInput.value);
        setDirector(directorInput.value);
    }

    const handleDurationChange = (e: SyntheticEvent) => {
        const durationInput = e.target as HTMLInputElement;
        console.log("change in durationInput:", durationInput.value);
        setDuration(parseInt(durationInput.value));
    }

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
                    <input type="text" name="description" onChange={handleDescriptionChange} />
                </label>
                <label>
                    Director:
                    <input type="text" name="director" onChange={handleDirectorChange} />
                </label>
                <label>
                    Duration:
                    <input type="number" name="duration" onChange={handleDurationChange} />
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
