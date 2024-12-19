function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Отримуємо елементи з DOM
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

// Додаємо слухача події click до кнопки changeColorButton
changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); // Генеруємо випадковий колір
  body.style.backgroundColor = randomColor; // Змінюємо колір фону body
  colorSpan.textContent = randomColor; // Відображаємо значення кольору у span.color
});
