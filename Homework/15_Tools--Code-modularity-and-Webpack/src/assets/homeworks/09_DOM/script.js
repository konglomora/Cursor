function getRandomColor() {
  const colorSchemeArray = [];
  for (i = 0; i < 3; i++) {
    const colorProportion = Math.trunc(Math.random() * (0 - 255) + 255);
    colorSchemeArray.push(colorProportion);
  }
  return `rgb(${colorSchemeArray.join()})`;
}

const generateBlocks = () => {
  const blocksCount = 25;
  for (let i = 0; i < blocksCount; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    blocksWrapper.append(block);
  }
  changeBlocksColor();
  buttonBlocksGenerator.onclick = null;
};

const changeBlocksColor = () => {
  const allBlocks = document.querySelectorAll('.block');
  allBlocks.forEach(
    (block) => (block.style.backgroundColor = getRandomColor())
  );
};

const generateBlocksInterval = () => {
  setInterval(changeBlocksColor, 1000);
  buttonBlocksColorInterval.onclick = null;
};
