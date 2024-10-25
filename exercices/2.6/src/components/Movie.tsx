
interface MovieProps {
    title: string;
    director: string;
    description: string;
}


const Movie = ({title, director, description}: MovieProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <p><strong>Réalisateur :</strong> {director}</p>
            <p>{description}</p>
        </div>
    );
}
export default Movie;