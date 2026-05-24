// 1. Створюємо стрілкову функцію для додавання елементів масиву
const sumArrayElements = (array) => {
    // Якщо масив порожній, відразу повертаємо 0
    if (array.length === 0) {
        return 0;
    }

    // Ініціалізуємо змінну для результату першим елементом масиву
    let result = array[0];

    // Використовуємо класичний цикл for, починаючи з другого елемента (індекс 1)
    for (let i = 1; i < array.length; i++) {
        result += array[i]; // Арифметичне додавання для чисел або конкатенація для рядків
    }

    return result;
};

// 2. Створюємо два масиви (чисел та рядків) за умовою ДЗ
const numbersArray = [5, 15, 25, 35, 45];
const stringsArray = ['Стрілкові ', 'функції ', 'працюють ', 'відмінно!'];

// 3. Викликаємо функцію для кожного масиву та виводимо результат у консоль
const numbersResult = sumArrayElements(numbersArray);
console.log('Результат додавання чисел:', numbersResult);
// Очікуваний вивід: 125

const stringsResult = sumArrayElements(stringsArray);
console.log('Результат додавання рядків:', stringsResult);
// Очікуваний вивід: "Стрілкові функції працюють відмінно!"
