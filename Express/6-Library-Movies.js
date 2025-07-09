const express = require('express');
const app = express();

app.use(express.json());

let movies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 9 },
  { id: 2, title: 'The Godfather', genre: 'Crime', rating: 10 },
  { id: 3, title: 'Toy Story', genre: 'Animation', rating: 8 },
];

function findMovieIndex(id) {
  return movies.findIndex(m => m.id === id);
}

app.get('/movies', (req, res) => {
  let allMovies = movies.map(m => JSON.stringify(m)).join('\n');
  res.send(allMovies || 'No movies found.');
});

app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.send('Invalid movie ID.');

  const movie = movies.find(m => m.id === id);
  if (!movie) return res.send(`Movie with ID ${id} not found.`);
  res.send(JSON.stringify(movie));
});

app.post('/movies', (req, res) => {
  const { id, title, genre, rating } = req.body;

  if (
    typeof id !== 'number' ||
    typeof title !== 'string' ||
    typeof genre !== 'string' ||
    typeof rating !== 'number' ||
    rating < 1 ||
    rating > 10
  ) {
    return res.send('Invalid input. Ensure id (number), title (string), genre (string), rating (1-10 number) are provided.');
  }

  if (movies.some(m => m.id === id)) {
    return res.send(`Movie with ID ${id} already exists.`);
  }

  movies.push({ id, title, genre, rating });
  res.send(`Movie with ID ${id} added successfully.`);
});

app.put('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.send('Invalid movie ID.');

  const movieIndex = findMovieIndex(id);
  if (movieIndex === -1) return res.send(`Movie with ID ${id} not found.`);

  const { title, genre, rating } = req.body;

  if (title !== undefined && typeof title !== 'string') {
    return res.send('Invalid title.');
  }
  if (genre !== undefined && typeof genre !== 'string') {
    return res.send('Invalid genre.');
  }
  if (rating !== undefined && (typeof rating !== 'number' || rating < 1 || rating > 10)) {
    return res.send('Invalid rating. Must be a number between 1 and 10.');
  }

  if (title !== undefined) movies[movieIndex].title = title;
  if (genre !== undefined) movies[movieIndex].genre = genre;
  if (rating !== undefined) movies[movieIndex].rating = rating;

  res.send(`Movie with ID ${id} updated successfully.`);
});

app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.send('Invalid movie ID.');

  const movieIndex = findMovieIndex(id);
  if (movieIndex === -1) {
    return res.send(`Movie with ID ${id} does not exist.`);
  }

  movies.splice(movieIndex, 1);
  res.send(`Movie with ID ${id} deleted successfully.`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Movie library app listening on port ${PORT}`);
});
