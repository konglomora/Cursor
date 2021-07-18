const charactersBlock = document.querySelector('.characters');

const filmsURL = 'https://swapi.dev/api/films/';

async function getCharatersInfo(url, id) {
  url = url + '/' + id;
  const episode = await getJsonAfterFetch(url);
  console.log(episode.title);
  await displayCharacters(episode);
}

async function displayCharacters(episode) {
  let charactersCards = '';

  charactersBlock.innerHTML = episode.characters.forEach( async characterUrl => {
    const charactersCardsGenerator = new Promise( async resolve => {
      const character = await getJsonAfterFetch(characterUrl);
      charactersCards += renderCharacterCard(character);
      resolve(charactersCards);
    });

    charactersBlock.innerHTML = await charactersCardsGenerator;
  });
  console.log(charactersCards);

  console.log(charactersBlock);
}

function renderCharacterCard(character) {
  let characterCard = '';
  const gender = character.gender;
  const name = character.name;
  const birthYear = character.birth_year;
  let genderSrc;
  let chracterPhotoSRC = `./img/characters_photos/${name.replaceAll(
    ' ',
    '_'
  )}.jpg`;

  if (gender === 'n/a' || gender === 'none')
    genderSrc = `./img/gender_icons/none.svg`;
  if (gender === 'male') genderSrc = `./img/gender_icons/male.svg`;
  if (gender === 'female') genderSrc = `./img/gender_icons/female.svg`;
  if (gender === 'hermaphrodite')
    genderSrc = `./img/gender_icons/hermaphrodite.svg`;

  characterCard = `
              <div class="characters__card">
              <div class="character__name">${name}</div>
              <img class="character__photo--image" src="${chracterPhotoSRC}" alt="Character photo">
              <div class="character__birth-year">Birth year: ${birthYear}</div>
              <img class="character__gender--image" src="${genderSrc}" alt="Character gender">
    
              </div>
              `;
  return characterCard;
}

const getCharactersButton = document.getElementById('getCharacters');
const selectEpisodes = document.getElementById('episodes-select');

getCharactersButton.addEventListener('click', () => {
  getCharatersInfo(filmsURL, selectEpisodes.value);
});
