// Отримуємо елементи з DOM
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухача події input до nameInput
nameInput.addEventListener('input', event => {
  // Отримуємо поточне значення інпуту, обрізаємо пробіли по краях
  const inputValue = event.target.value.trim();

  // Перевіряємо, чи значення інпуту пусте або містить лише пробіли
  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
});
