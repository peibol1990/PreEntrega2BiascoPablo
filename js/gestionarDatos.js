const API_URL = "https://rickandmortyapi.com/api/character";
const characterGrid = document.getElementById("gridPersonaje");


async function cargar() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderCharacters(data.results);
  } catch (error) {
    console.error("Error al hacer fetch:", error);
  }
}


function renderCharacters(characters) {
  characterGrid.innerHTML = ""; 
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <h2>${character.name}</h2>
      <p>Especie: ${character.species}</p>
      <p>Estado: ${character.status}</p>
      <p>Origen: ${character.origin.name}</p>
    `;

    
    card.addEventListener("click", () => selectCharacter(character));
    characterGrid.appendChild(card);
  });
}


function selectCharacter(character) {
  Swal.fire({
    title: `Seleccionar ${character.name}?`,
    text: "De verdad querés seleccionar este pesonaje?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Obvio",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      
      window.location.href = "../pages/main_page.html";
    }
  });
}


cargar();
