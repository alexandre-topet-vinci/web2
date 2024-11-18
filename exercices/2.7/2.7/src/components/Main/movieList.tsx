import { Movie } from '../../types';

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <table className="movie-list">
            <thead>
                <tr>
                    <th>Movie</th>
                    <th>Director</th>
                    <th>Duration</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => (
                    <tr key={movie.title}>
                        <td>{movie.title}</td>
                        <td>{movie.director}</td>
                        <td>{movie.duration}</td>
                        <td>{movie.image}</td>
                        <td>{movie.description}</td>
                        <td>{movie.budget}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MovieList;