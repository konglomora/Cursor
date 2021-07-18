const getPlanetsButton = document.getElementById('getPlanets--button');
const getPreviousPlanetsPageButton = document.getElementById(
  'prev-planets--button'
);

const getNextPlanetsPageButton = document.getElementById(
  'next-planets--button'
);
const planetsBlock = document.querySelector('.planets');
const planetsURL = 'https://swapi.dev/api/planets/';

async function getJsonAfterFetch(url) {
  const response = await fetch(url);

  const dataObject = await response.json(response);
  return dataObject;
}

async function getPlanets() {
  const planetsObject = await getJsonAfterFetch(planetsURL);
  renderPlanetsPage(planetsObject);
}

getPlanetsButton.addEventListener('click', () => {
  getPlanets();
});

function renderPlanetsPage(planetsObject) {
  let planetsItem = '';
  if (planetsObject.detail !== 'Not found') {
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
}

let planetsPageNumber = 0;

function blockCriticalPagePosition(pageNumber) {
  const minPlanetsPagesCount = 1;
  const maxPlanetsPagesCount = 5;
  if (pageNumber > maxPlanetsPagesCount) {
    planetsPageNumber = maxPlanetsPagesCount;
  } else if (pageNumber < minPlanetsPagesCount) {
    planetsPageNumber = minPlanetsPagesCount;
  }
  return planetsPageNumber;
}

async function getPreviousPlanetsPage(pageNumber) {
  --pageNumber;
  blockCriticalPagePosition(pageNumber);
  const planetsObject = await getJsonAfterFetch(
    `https://swapi.dev/api/planets/?page=${pageNumber}`
  );
  renderPlanetsPage(planetsObject);
  planetsPageNumber--;
  blockCriticalPagePosition(pageNumber);
}

async function getNextPlanetsPage(pageNumber) {
  ++pageNumber;
  blockCriticalPagePosition(pageNumber);
  const planetsObject = await getJsonAfterFetch(
    `https://swapi.dev/api/planets/?page=${pageNumber}`
  );
  renderPlanetsPage(planetsObject);
  planetsPageNumber++;
}

getPreviousPlanetsPageButton.addEventListener('click', () => {
  getPreviousPlanetsPage(planetsPageNumber);
});

getNextPlanetsPageButton.addEventListener('click', () => {
  getNextPlanetsPage(planetsPageNumber);
});
