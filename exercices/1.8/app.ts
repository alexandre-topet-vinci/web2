import express from "express";

import pizzaRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let getCounter = 0;

app.use((req, _res, next) => {
  if (req.method === "GET") {
    getCounter++;
    console.log(`GET counter : ${getCounter}`);
  }
  next();
});

app.use("/films", pizzaRouter);

export default app;
