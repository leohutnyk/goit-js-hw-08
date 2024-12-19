// Отримуємо список категорій
const categoriesList = document.querySelector('#categories');

// Рахуємо кількість категорій
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

// Проходимося по кожній категорії та виводимо необхідну інформацію
categoriesItems.forEach(item => {
  // Отримуємо текст заголовка категорії
  const categoryTitle = item.querySelector('h2').textContent;

  // Рахуємо кількість елементів у категорії
  const categoryElements = item.querySelectorAll('ul li').length;

  // Виводимо результат у консоль
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
