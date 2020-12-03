const express = require("express");
const router = express.Router();

const moviesArray = [
  { id: 1, title: "Movie 1", releaseYear: "2010" },
  { id: 2, title: "Movie 2", releaseYear: "2020" },
  { id: 3, title: "Movie 3", releaseYear: "2000" },
];

// http://localhost:5000/movies
router.get("/", (request, response) => {
  response.json(moviesArray);
});

// http://localhost:5000/movies/search?title=Jumanji
router.get("/search", (request, response) => {
  const selectedMovie = moviesArray.find(
    (movie) => movie.title === request.query.title
  );
  if (selectedMovie) {
    response.json(selectedMovie);
  } else {
    response.status(404).send({ error: "movie was not found" });
  }
});

// http://localhost:5000/movies/10
router.get("/:id", (request, response) => {
  const selectedMovie = moviesArray.find(
    (movie) => movie.id === Number(request.params.id)
  );
  response.json(selectedMovie);
});

// http://localhost:5000/movies
router.post("/", (request, response) => {
  const { title, releaseYear } = request.body;

  if (title && releaseYear) {
    const newMovie = { ...request.body, id: moviesArray.length + 1 };
    moviesArray.push(newMovie);
    response.json(newMovie);
  } else {
    response
      .status(400)
      .send({ error: "movies must have title and releaseYear" });
  }
});

module.exports = router;
