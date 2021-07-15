const resultsBlock = document.querySelector('.results');

const filmsUrl = 'https://swapi.dev/api/films/';

async function asyncFetch(url, id) {
  const res = await fetch(url + '/' + id);
  const data = await res.json();
  await displayResults(url, data);
}

async function displayResults(url, data) {
  let output = '';
  let genderSrc;
  if (url === filmsUrl) {
    data.characters.forEach(characterUrl =>
      fetch(characterUrl).then(response => {
        response.json().then(character => {
          if (character.gender === 'n/a' || character.gender === 'none')
            genderSrc = `./img/gender_icons/none.svg`;
          if (character.gender === 'male')
            genderSrc = `./img/gender_icons/male.svg`;
          if (character.gender === 'female')
            genderSrc = `./img/gender_icons/female.svg`;
          output += `
          <div class="characters__block">
          <div class="chatacter__name">${character.name}</div>
          <div class="chatacter__birth-year">Birth year: ${character.birth_year}</div>
          <img class="character__gender--image" src="${genderSrc}" alt="">
          </div>
          `;
        });
        resultsBlock.innerHTML = output;
      })
    );
  }
}

asyncFetch(filmsUrl, 12);
