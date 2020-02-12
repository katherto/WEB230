// Current valid API key for Unsplash API as of 11/18/2019
const API_KEY = `116622101d68fe5bd6a8e57b1652c5816bbdab0d933af477b618521a14132893`;

// Fetches and creates a JSON object
const fetchJSON = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      parseResults(data.results);
    });
};

// Creates markup code from the passed JSON object
const parseResults = results => {
  const imageMarkup = results
    .map(image => {
      return `<div><a href="${image.links.html}" target="_blank"><img src="${
        image.urls.thumb
      }" alt="${image.alt_description}" style="border: 5px solid ${
        image.color
      }" /></a></div>`;
    })
    .join("");

  displayImages(imageMarkup);
};

// Displays the images to the page
const displayImages = markup => {
  document.getElementById("images").innerHTML = markup;
};

document.getElementById("submit-query").addEventListener("click", () => {
  const search = document.getElementById("query").value;
  const numResults = document.getElementById("num-images").value;

  fetchJSON(
    `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${search}&per_page=${numResults}`
  );
});
