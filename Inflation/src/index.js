const endpoint = "https://the-inflation-api.herokuapp.com/api/";

document.getElementById("calculate").addEventListener("click", () => {
  const value = document.getElementById("value").value;
  const year = document.getElementById("year").value;

  fetch(`${endpoint}?value=${value}&year=${year}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("app").innerHTML = `$${
        data.response.startValue
      } USD in 2019 = $${data.response.adjustedValue} USD in ${
        data.response.targetYear
      }`;
    });
});
