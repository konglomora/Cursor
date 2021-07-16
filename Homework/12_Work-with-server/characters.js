const resultsBlock = document.querySelector('.results');

const filmsURL = 'https://swapi.dev/api/films/';



async function getCharatersInfo(url, id) {
  const res = await fetch(url + '/' + id);
  const episode = await res.json();
  // output += `<div class="episode-title">${episode.title}</div>`;
  console.log(episode.title);
  await displayCharacters(episode);
}

async function displayCharacters(episode) {
 
  let output = '';
  episode.characters.forEach(characterUrl =>
    fetch(characterUrl).then(response => {
      response
        .json()
        .then(character => {
          const gender = character.gender;
          const name = character.name;
          const birthYear = character.birth_year;
          let genderSrc;
          let chracterPhotoSRC = `./img/characters_photos/${character.name.replaceAll(
            ' ',
            '_'
          )}.jpg`;

          if (gender === 'n/a' || gender === 'none')
            genderSrc = `./img/gender_icons/none.svg`;
          if (gender === 'male') genderSrc = `./img/gender_icons/male.svg`;
          if (gender === 'female') genderSrc = `./img/gender_icons/female.svg`;
          if (gender === 'hermaphrodite')
            genderSrc = `./img/gender_icons/hermaphrodite.png`;
          output += `
          <div class="characters__block">
          <div class="chatacter__name">${name}</div>
          <img class="character__photo--image" src="${chracterPhotoSRC}" alt="Character photo">
          <div class="chatacter__birth-year">Birth year: ${birthYear}</div>
          <div class="chatacter__birth-year">Gender:</div>
          <img class="character__gender--image" src="${genderSrc}" alt="Character gender">

          </div>
          `;
        })
        .then(result => (resultsBlock.innerHTML = output));
    })
  );
}

const getCharactersButton = document.getElementById('getCharacters');
const selectEpisodes = document.getElementById('episodes-select');

getCharactersButton.addEventListener('click', () => {
  getCharatersInfo(filmsURL, selectEpisodes.value);
});

