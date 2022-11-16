const colors = [
    'bleu',
    'blanc',
    'bisque',
    'birje'
]
const isColorsDisplayed = [
    false,
    false
]

const colorInput = document.querySelector('#color-picker');
const colorList = document.querySelector('.color-list');


colorInput.addEventListener('input', () => {
    const numCharacters = colorInput.value.length
    colors.forEach((color, i) => {
        if (color.slice(0, numCharacters) === colorInput.value && numCharacters !== 0) {
            if (!isColorsDisplayed[i]) {
                const colorTag = document.createElement('li');
                colorTag.setAttribute('class', `suggest-${color}`)
                colorTag.innerText = color;
                colorList.append(colorTag);
                isColorsDisplayed[i] = true;
            }
        } else {
            if (isColorsDisplayed[i]) {
                isColorsDisplayed[i] = false;
                document.querySelector(`.suggest-${color}`).remove();
            }
        }
    })
})