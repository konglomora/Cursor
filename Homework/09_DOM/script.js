const wrapper = document.createElement('div');
wrapper.classList.add('block__wrapper');
document.body.append(wrapper);

function generateBlocks() {
  const squareCount = 25
    for (let i = 0; i < squareCount; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        wrapper.append(block);
    }

    const createdBlocks = document.querySelectorAll('.block');
    setInterval(() => {
        createdBlocks.forEach((block) => {
            const redProportion = Math.trunc(Math.random() * (0 - 255) + 255);
            const greenProportion = Math.trunc(Math.random() * (0 - 255) + 255);
            const blueProportion = Math.trunc(Math.random() * (0 - 255) + 255);

            block.style.backgroundColor = `rgb(
            ${redProportion},
            ${greenProportion},
            ${blueProportion}
        )`;
        });
    }, 1000);
}

generateBlocks();

