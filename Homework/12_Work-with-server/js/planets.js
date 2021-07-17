const getPlanetsButton = document.getElementById('getPlanets--button');
const getPreviousPlanetsPageButton = document.getElementById(
  'prev-planets--button'
);

const getNextPlanetsPageButton = document.getElementById(
  'next-planets--button'
);
const planetsBlock = document.querySelector('.planets');
const planetsURL = 'https://swapi.dev/api/planets/';
const minPlanetsPagesCount = 0;
const maxPlanetsPagesCount = 6;

async function getJsonAfterFetch(url) {
  const response = await fetch(url);
  const dataObject = await response.json(response);
  return dataObject;
}

async function getPlanets() {
  const planetsObject = await getJsonAfterFetch(planetsURL);
  console.log(planetsObject);
  renderPlanetsPage(planetsObject);
}

getPlanetsButton.addEventListener('click', () => {
  getPlanets();
});

function renderPlanetsPage(planetsObject) {
  let planetsItem = '';
  planetsObject.results.forEach(planet => {
    const planetName = planet.name;
    planetsItem += `
    <div class="planet__card">
        <div class="planet-name">${planetName}</div>
     
    </div>
    `;
  });
  planetsBlock.innerHTML = planetsItem;
}

let planetsPageNumber = 1;

async function getPreviousPlanetsPage(pageNumber) {
  const planetsObject = await getJsonAfterFetch(
    `https://swapi.dev/api/planets/?page=${pageNumber}`
  );

  console.log(planetsObject);
  console.log(pageNumber);
  renderPlanetsPage(planetsObject);
}

async function getNextPlanetsPage(pageNumber) {
  const planetsObject = await getJsonAfterFetch(
    `https://swapi.dev/api/planets/?page=${pageNumber}`
  );

  console.log(planetsObject);
  console.log(pageNumber);
  renderPlanetsPage(planetsObject);
}

getPreviousPlanetsPageButton.addEventListener('click', () => {
  getPreviousPlanetsPage(planetsPageNumber);
  --planetsPageNumber;
  if (planetsPageNumber <= minPlanetsPagesCount) {
    ++planetsPageNumber;
  }
});

getNextPlanetsPageButton.addEventListener('click', () => {
  getNextPlanetsPage(planetsPageNumber);
  ++planetsPageNumber;
  if (planetsPageNumber > maxPlanetsPagesCount) {
    --planetsPageNumber;
  }
});
