function sumArrayElements(array) {
    if (array.length === 0) {
        return 0;
    }

    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

const numbersArray = [10, 20, 30, 40, 50];
const stringsArray = ['Привет, ', 'это ', 'моя ', 'домашняя ', 'работа!'];

const numbersResult = sumArrayElements(numbersArray);
console.log('Результат сложения чисел:', numbersResult);

const stringsResult = sumArrayElements(stringsArray);
console.log('Результат сложения строк:', stringsResult);
