const blocksWrapper = document.querySelector('.blocks__wrapper');

const buttonBlocksGenerator = document.querySelector('.block-generator');
const buttonBlocksColorInterval = document.querySelector(
  '.block-inteval-colorizer'
);

buttonBlocksGenerator.onclick = () => {
  generateBlocks()
  buttonBlocksColorInterval.classList.add('visible')
};
buttonBlocksColorInterval.onclick = generateBlocksInterval;
