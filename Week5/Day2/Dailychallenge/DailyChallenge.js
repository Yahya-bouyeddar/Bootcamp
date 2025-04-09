const form = document.getElementById("form");

const deleteall = document.getElementById("deleteall");

deleteall.style.display = "none";

const divWrapper = document.getElementById("result");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  deleteall.style.display = "block";
  const input = document.querySelector("input").value;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?q=${input}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.log("Résultat complet de l'API :", data.data.images.original.url);

    const img = document.createElement("img");
    const div = document.createElement("div");
    const deleteButton = document.createElement("button");
    img.src = `${data.data.images.original.url}`;
    deleteButton.textContent = "Delete";
    div.appendChild(img);
    div.appendChild(deleteButton);

    divWrapper.appendChild(div);

    deleteButton.addEventListener("click", (e) => {
      div.remove();

      if (divWrapper.childElementCount == 1) {
        deleteall.style.display = "none";
      }
    });
    deleteall.addEventListener("click", (e) => {
      divWrapper.remove();
      deleteall.style.display = "none";
    });
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
  }
});
