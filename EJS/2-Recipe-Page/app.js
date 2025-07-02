const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

const sampleRecipe = {
  name: 'Spaghetti Carbonara',
  image: 'recipe-image.jpg', 
  ingredients: [
    '200g spaghetti',
    '100g pancetta',
    '2 large eggs',
    '50g pecorino cheese',
    '50g parmesan',
    'Freshly ground black pepper',
    'Salt'
  ],
  steps: [
    'Cook the spaghetti in salted boiling water until al dente.',
    'Fry the pancetta until crisp.',
    'Beat the eggs and mix with grated pecorino and parmesan.',
    'Drain the pasta and combine with pancetta.',
    'Remove from heat and quickly mix in the egg and cheese mixture.',
    'Season with black pepper and serve immediately.'
  ]
};

app.get('/recipe', (req, res) => {
  res.render('recipe', { recipe: sampleRecipe });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
