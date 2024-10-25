import Movie from "./Movie";

interface CinemaProps {
    name: string;
}

const Cinema = ({name}: CinemaProps) => (
    <div>
      <h2>{name}</h2>
      <ul>
        <Movie
          title="THE WATCHERS"
          director="Ishana Night Shyamalan"
          description="A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves."
        />
      </ul>
    </div>
  );

export default Cinema;