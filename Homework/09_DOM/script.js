function createSquares(squareCount) {
    setInterval(() => {
        const wrapper = document.querySelector('.block__wrapper');

        for (let i = 0; i < squareCount; i++) {
            const square = document.createElement('div');
            square.classList.add('block');
            wrapper.append(square);
        }

        const createdBlocks = document.querySelectorAll('.block');

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

createSquares(50);
