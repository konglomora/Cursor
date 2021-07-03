const blocksWrapper = document.querySelector('.blocks__wrapper');

const buttonBlocksGenerator = document.querySelector('.block-generator');
const buttonBlocksColorInterval = document.querySelector(
  '.block-inteval-colorizer'
);

buttonBlocksGenerator.onclick = generateBlocks;
buttonBlocksColorInterval.onclick = generateBlocksInterval;
