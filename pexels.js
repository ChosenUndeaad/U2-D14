const apiKey = "PD9x4K57ZsCNAHYp5t0i6LStTaBTghlxFFbLM9MF292jxDttD2GBC9VV";

const loadImages = (immagini) => {
  const url = `https://api.pexels.com/v1/search?query=${immagini}&per_page=9`;
  const urlParam = new URLSearchParams(location.search);
  const imgId = urlParam.get("id");

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
    .then((data) => {
      const container = document.querySelector(".album .row");
      container.innerHTML = "";

      data.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="${photo.src.medium}" class="card-img-top" alt="Immagine">
                    <div class="card-body">
                        <h5 class="card-title">${photo.photographer}</h5>
                        <p class="card-text">Foto da Pexels</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="${photo.url}" target="_blank" class="btn btn-sm btn-outline-primary">Vedi su Pexels</a>
                            <button class="btn btn-sm btn-outline-danger hide-btn">Hide</button>
                        </div>
                    </div>
                </div>
            `;
        container.appendChild(col);
      });

      document.querySelectorAll(".hide-btn").forEach((button) => {
        button.addEventListener("click", function () {
          this.closest(".col-md-4").remove();
        });
      });
    })
    .catch((error) =>
      console.error("Errore nel caricamento delle immagini:", error)
    );
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".btn-primary")
    .addEventListener("click", () => loadImages("mountains"));
  document
    .querySelector(".btn-secondary")
    .addEventListener("click", () => loadImages("kittens"));
});
