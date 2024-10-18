import path from "node:path";
import { parse, serialize } from "../utils/json";
import { Film, NewFilm } from "../types";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    duration: 132,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description:
      "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    budget: 150,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    budget: 63,
  },
  {
    id: 3,
    title: "Summer Wars",
    director: "Mamoru Hosoda",
    duration: 114,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
    description:
      "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
    budget: 18.7,
  },
  {
    id: 4,
    title: "The Meyerowitz Stories",
    director: "Noah Baumbach",
    duration: 112,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
    description:
      "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
  },
  {
    id: 5,
    title: "her",
    director: "Spike Jonze",
    duration: 126,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    budget: 23,
  },
];

// Read all films with a minimum duration

function readAllFilms(minimumDuration: number): Film[] {
  const films = parse(jsonDbPath, defaultFilms);
  return films.filter((film) => film.duration >= minimumDuration);
}

// Read one film

function readOneFilm(id: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.id === id);

  if (!film) {
    return undefined;
  }

  return film;
}

// Create one film
function createOneFilm(NewFilm: NewFilm): Film {
  const films = parse(jsonDbPath, defaultFilms);
  const id = films.length + 1;
  const newFilm = {
    id,
    ...NewFilm,
  };
  films.push(newFilm);
  serialize(jsonDbPath, films);
  return newFilm;
}

function deleteOneFilm(id: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((index) => index.id === id);

  if (index === -1) {
    return undefined;
  }
  const deletedElement = films.splice(index, 1);
  serialize(jsonDbPath, films);
  return deletedElement[0];
}

function updateOneFilm(id: number, updatedFilm: Partial<NewFilm>): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.id === id);

  if (!film) {
    return undefined;
  }

  if (!film || typeof film !== "object" || 
    (film.title && typeof film.title !== "string") ||
    (film.director && typeof film.director !== "string") ||
    (film.duration && typeof film.duration !== "number") ||
    (film.budget && typeof film.budget !== "number") ||
    (film.description && typeof film.description !== "string") ||
    (film.imageUrl && typeof film.imageUrl !== "string")) {
    return undefined;
  }

  const {title, director, duration, budget, description, imageUrl}: Partial<NewFilm> = updatedFilm;

  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }
  if (budget) {
    film.budget = budget;
  }
  if (description) {
    film.description = description;
  }
  if (imageUrl) {
    film.imageUrl = imageUrl;
  }
  serialize(jsonDbPath, films);
  return film;
}

function findFilmByTitle(title: string): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.title === title);
  return film;
}

export { readAllFilms, readOneFilm, createOneFilm, deleteOneFilm, updateOneFilm, findFilmByTitle };

