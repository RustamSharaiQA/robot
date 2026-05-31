const processArray = (arr: number[] | string[]): number | string => {
    if (arr.length === 0) {
        return 0;
    }

    if (typeof arr[0] === 'number') {
        let totalNumber = 0;
        (arr as number[]).forEach((num) => {
            totalNumber += num;
        });
        return totalNumber;
    } else {
        let totalString = '';
        (arr as string[]).forEach((str) => {
            totalString += str;
        });
        return totalString;
    }
};

const num1: number[] = [1, 2, 3];
const stri1: string[] = ['test', 'is', 'good'];

const sumResult = processArray(num1);
console.log('Результат для чисел (сложение):', sumResult);

const concatResult = processArray(stri1);
console.log('Результат для строк (конкатенация):', concatResult);
