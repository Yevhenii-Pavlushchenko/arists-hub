// import '../../../ node_modules/css-star-rating/css/star-rating.css ';

const ratingInputs = document.querySelectorAll('.rating input');

ratingInputs.forEach(input => {
  input.addEventListener('change', event => {
    // Отримуємо значення вибраної зірки
    const rating = event.target.value;

    console.log(`Рейтинг: ${rating}`);

    // Тут ти можеш далі використовувати змінну rating,
    // наприклад, відправляти на сервер
  });
});
