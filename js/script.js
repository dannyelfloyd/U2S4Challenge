const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
const characterList = document.getElementById('character-list');

actualizarPagina ();

prevPage.addEventListener('click', actualizarPagina);
nextPage.addEventListener('click', actualizarPagina);

function actualizarPagina () {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue existosa');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.info.pages);
      data.results.forEach((personaje) => {
        characterList.innerHTML += `<li><img src="${personaje.image}" alt=""><p>Name: ${personaje.name}</p><p>Species: ${personaje.species}</p></li>`;
      });
    })
    .catch((error) => {
      alert('Error: No se puede obtener el personaje');
    });
};