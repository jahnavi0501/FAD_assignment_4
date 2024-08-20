const generateButton = document.getElementById('generateButton');
const minValueInput = document.getElementById('minValue');
const maxValueInput = document.getElementById('maxValue');
const resultDiv = document.getElementById('result');

generateButton.addEventListener('click', () => {
    const minValue = parseInt(minValueInput.value);
    const maxValue = parseInt(maxValueInput.value);

    if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
        resultDiv.textContent = 'Please enter valid min and max values.';
    } else {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        resultDiv.textContent = `Random Number: ${randomNumber}`;
    }
});
