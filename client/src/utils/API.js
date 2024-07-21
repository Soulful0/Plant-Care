// Installation of API Plant Care Guide
const apiKey = "sk-yUQu6699c7a8a20b46279";
const endpoint = `https://perenual.com/api/species-care-guide-list?key=${apiKey}&species_id=1&page=1`;

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
