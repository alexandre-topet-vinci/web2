import { Router } from "express";
import { NewFilm } from "../types";
import {
  createOneFilm,
  deleteOneFilm,
  readAllFilms,
  readOneFilm,
  updateOneFilm,
  findFilmByTitle,
} from "../services/films";

const router = Router();

router.get("/", (req, res) => {
  const minimumDuration = parseInt(req.query["minimum-duration"] as string);
  const films = readAllFilms(minimumDuration);
  return res.json(films);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const film = readOneFilm(id);
  if (!film) {
    return res.status(404).json({ message: "Film not found" });
  }
  return res.json(film);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deletedFilm = deleteOneFilm(id);
  if (!deletedFilm) {
    return res.status(404).json({ message: "Film not found" });
  }
  return res.json(deletedFilm);
});

router.patch("/:id", (req, res) => {
  
  const id = parseInt(req.params.id);
  const updatedFilm = req.body as Partial<NewFilm>;
  const film = updateOneFilm(id, updatedFilm);
  if (!film) {
    return res.status(404).json({ message: "Film not found" });
  }
  return res.json(film);

});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ message: "Invalid body" });
  }
  
  const newFilm = req.body as NewFilm;
  const existingFilm = findFilmByTitle(newFilm.title);
  if (existingFilm) {
    return res.status(400).json({ message: "Film already exists" });
  }
  const film = createOneFilm(newFilm);
  return res.status(201).json(film);
});

export default router;
