import { useOutletContext } from "react-router-dom";
import AddMovieForm from "../AddMovieForm";
import { MovieContext } from "../../types";

const AddMoviePage = () => {
    const { onMovieAdded }: MovieContext = useOutletContext();

    return (
        <AddMovieForm onMovieAdded={onMovieAdded} />
    );
};

export default AddMoviePage;