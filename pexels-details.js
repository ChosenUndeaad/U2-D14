const imgDetail = (photoId) => {
  const url = `https://api.pexels.com/v1/photos/${photoId}`;

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
        throw new Error("Errore HTTP");
      }
    })
    .then((data) => {})

    .catch((error) =>
      console.error("Errore nel caricamento dei dettagli dell'immagine:", error)
    );
};
