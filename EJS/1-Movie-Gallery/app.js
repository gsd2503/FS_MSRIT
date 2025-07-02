const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(express.static(__dirname));

const movies = [
  { title: 'The Shawshank Redemption', rating: 9.3 },
  { title: 'The Godfather', rating: 9.2 },
  { title: 'Inception', rating: 8.8 },
  { title: 'Interstellar', rating: 8.6 },
  { title: 'The Dark Knight', rating: 9.0 },
  { title: 'Jumanji', rating: 6.9 },
  { title: 'Avengers: Endgame', rating: 8.4 },
  { title: 'Frozen', rating: 7.5 }
];

app.get('/', (req, res) => {
  res.render('index', { movies });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
