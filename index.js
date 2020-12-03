const express = require("express");
const app = express();
const moviesRouter = require("./routes/movies.route");

const port = 5000;

app.use(express.json());

app.use("/movies", moviesRouter);

app.get("/", (request, response) => {
  response.send("Welcome to my app");
});

app.listen(port, () => {
  console.log(`The app is running at ${port}`);
});
