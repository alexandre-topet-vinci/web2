import { Router } from "express";

import { Film } from "../types";

const router = Router();

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


// films?minimum-duration=value	GET	READ ALL FILTERED : Lire toutes les ressources de la collection selon le filtre donné

router.get("/", (req, res) => {
  const minimumDuration = parseInt(req.query["minimum-duration"] as string);

  if (isNaN(minimumDuration)) {
    return res.status(400).json({ message: "Wrong minimum-duration" });
  }

  if (minimumDuration) {
    const films = defaultFilms.filter((film) => film.duration >= minimumDuration);
    return res.json(films);
  }

  return res.json(defaultFilms);
});

// Read one film
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);

  if (!film) {
    return res.status(404).json({ message: "Film not found" });
  }

  return res.json(film);
});

// Create one film
router.post("/", (req, res) => {
  const { title, director, duration, budget, description, imageUrl } = req.body;

  if (typeof title !== "string" || typeof director !== "string" || typeof duration !== "number" || duration <= 0) {
    return res.status(400).json({ message: "Wrong title, director or duration" });
  }

  if (budget && (typeof budget !== "number" || budget <= 0)) {
    return res.status(400).json({ message: "Wrong budget" });
  }

  if (description && typeof description !== "string") {
    return res.status(400).json({ message: "Wrong description" });
  }

  if (imageUrl && typeof imageUrl !== "string") {
    return res.status(400).json({ message: "Wrong imageUrl" });
  }
  if (title && director && defaultFilms.some((film) => film.title === title && film.director === director)) {
    return res.status(400).json({ message: "Film already exists" });
  }
  const id = defaultFilms.length + 1;
  const newFilm = { id, title, director, duration, budget, description, imageUrl };
  defaultFilms.push(newFilm);

  return res.status(201).json(newFilm);
});



router.get("/", (_req, res) => {
  return res.json(defaultFilms);
});

export default router;
