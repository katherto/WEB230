const listEndpoint = "https://dog.ceo/api/breeds/list/all";

const fetchJSON = url => {
  return fetch(url).then(response => response.json());
};

fetchJSON(listEndpoint).then(data => {
  console.log(data);
  const dogList = Object.keys(data.message)
    .map(breed => {
      return `<option value="${breed}">${breed}</option>`;
    })
    .join("");
  document.getElementById("dog-list").innerHTML = dogList;
});

document.getElementById("find-dog").addEventListener("click", () => {
  const selectedDog = document.getElementById("dog-list").value;

  fetchJSON(`https://dog.ceo/api/breed/${selectedDog}/images`).then(data => {
    const dogImages = data.message.map(image => {
      return `<img src="${image}" />`;
    });
    document.getElementById("app").innerHTML = dogImages;
  });
});
