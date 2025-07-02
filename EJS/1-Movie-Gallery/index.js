<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Movie Gallery</title>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>

<header>
  <h1>My Movie Gallery</h1>
</header>

<main>
  <div class="gallery">
    <% movies.forEach(movie => { %>
      <div class="card <%= movie.rating > 8 ? 'highlight' : '' %>">
        <h2><%= movie.title %></h2>
        <p>Rating: <%= movie.rating %></p>
      </div>
    <% }) %>
  </div>
</main>

<footer>
  <p>&copy; 2025 Movie Gallery. All rights reserved.</p>
</footer>

</body>
</html>
