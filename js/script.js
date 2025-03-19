const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
const characterList = document.getElementById('character-list');

let currentPage = 1;

function actualizarPagina () {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      characterList.innerHTML = "";
      data.results.forEach((personaje) => {
        characterList.innerHTML += 
        `<li>
          <img src="${personaje.image}" alt="Imagen de ${personaje.name}">
          <p><b>Name</b>: ${personaje.name}</p>
          <p><b>Species</b>: ${personaje.species}</p>
        </li>`;
      });
    })
    .catch((error) => console.error('Error: ', error.message));
};
actualizarPagina ();

prevPage.addEventListener('click', () => {
  if (currentPage !== 1){
    currentPage--
    actualizarPagina ();
  }
});
nextPage.addEventListener('click', () => {
  if (currentPage < 42){
    currentPage++
    actualizarPagina ();
  }
});