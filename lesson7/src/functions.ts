function processArrayf(arr: number[] | string[]): number | string {
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
}

const num12: number[] = [1, 2, 3];
const stri12: string[] = ['test', 'is', 'good'];

const sumResult1 = processArrayf(num12);
console.log('Результат для чисел (сложение):', sumResult1);

const concatResult1 = processArrayf(stri12);
console.log('Результат для строк (конкатенация):', concatResult1);
