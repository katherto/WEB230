// Current valid API key for Open Movie Database as of 11/19/2019
const API_KEY = `dcca0cea`;

// Returns a JSON object based on the url passed
const fetchJSON = url => {
  return fetch(url).then(response => response.json());
};

// Utilizes OMDB id to return details of the clicked image
const displayDetails = imdb => {
  fetchJSON(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdb}`).then(
    data => {
      document.getElementById("details").innerHTML = `<img src="${
        data.Poster
      }" alt="poster image for ${data.Title}"><div><h2>${data.Title} (${
        data.Year
      })</h2><p><span>Rating:</span> ${
        data.Rated
      }&nbsp;&nbsp;|&nbsp;&nbsp;<span>Runtime:</span> ${
        data.Runtime
      }&nbsp;&nbsp;|&nbsp;&nbsp;<span>Genre:</span> ${
        data.Genre
      }&nbsp;&nbsp;|&nbsp;&nbsp;<span>Released:</span> ${data.Released} (${
        data.Country
      })</p><p>${data.Plot}</p><p><span>Director:</span> ${
        data.Director
      }<br><span>Writer(s):</span> ${data.Writer}<br><span>Actors:</span> ${
        data.Actors
      }</p></div>`;
    }
  );
};

// Displays images of the movies to the user
const displayMovies = movies => {
  // Resets details when a new search is made
  document.getElementById("details").innerHTML = ``;

  const markup = movies
    .map(movie => {
      return `<img src="${movie.Poster}" alt="poster image for ${
        movie.Title
      }" data-imdb="${movie.imdbID}" />`;
    })
    .join("");

  document.getElementById("movies").innerHTML = markup;
};

// Event listener control
document.querySelector("body").addEventListener(
  "click",
  e => {
    if (e.target.dataset.imdb !== undefined) {
      displayDetails(e.target.dataset.imdb);
    }

    if (e.target.id === "submit-query") {
      const search = document.getElementById("query").value;
      fetchJSON(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie`
      ).then(data => {
        displayMovies(data.Search);
      });
    }
  },
  false
);
