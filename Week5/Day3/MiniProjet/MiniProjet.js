let content = document.getElementById("content");
let btn = document.getElementById("btn");

let loading = `<div class="fa-3x">
          <i
            class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse fa-3x"
            style="color: white"
          ></i>
         
        </div>
        <p id="Loading">Loading...</p>`;

async function getData() {
  const random = Math.floor(Math.random() * 80) + 1;

  content.innerHTML = loading;

  try {
    const response = await fetch(`https://swapi.dev/api/people/${random}/`);
    if (!response.ok) {
      throw new Error("Erreur", response.status);
    }
    const data = await response.json();

    content.innerHTML = `  <h1> ${data.name}</h1>
                            <p> Height :${data.height}</p>
                            <p Gender : ${data.gender}</p>
                             <p> Birth Year : ${data.birth_year}</p>
                             <p> Home World : ${data.homeworld}</p>`;
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
  }
}

btn.addEventListener("click", getData);
