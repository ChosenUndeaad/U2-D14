const apiKey = "PD9x4K57ZsCNAHYp5t0i6LStTaBTghlxFFbLM9MF292jxDttD2GBC9VV";

const getImages = function () {
  const url = "https://api.pexels.com/v1/search?query=nature&per_page=10";

  fetch(url, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE");
      }
    })
    .then((data) => {
      console.log("Immagini ricevute:", data.photos);
    })
    .catch((error) => console.error("Errore nella richiesta:", error));
};

getImages();
