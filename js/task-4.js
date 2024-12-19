document
  .querySelector('.login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
    } else {
      const formData = {
        email,
        password,
      };
      console.log(formData);
      event.target.reset(); // Очищаємо поля форми
    }
  });
