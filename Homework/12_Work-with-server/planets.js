const getPlanetsButton = document.getElementById('getPlanets--button');

getPlanetsButton.addEventListener('click', () => {
  getPlanets();
});

const planetsBlock = document.querySelector('.planets');

async function getPlanets() {
  let planetsItem = '';

  const response = await fetch('https://swapi.dev/api/planets/');
  const planets = await response.json();
  console.log(planets);
  planets.results.forEach(planet => {
    const planetName = planet.name;
    let planetImageSRC = `./img/planets/${planetName.replaceAll(' ', '_')}.jpg`;
    planetsItem += `
    <div class="planet__card">
        <div class="planet-name">${planetName}</div>
        <img class="planet-image" src="${planetImageSRC}" alt="Character photo">
    </div>
    `;
  });
  planetsBlock.innerHTML = planetsItem;
}
