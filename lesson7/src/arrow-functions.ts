const sum1 = (arr: number[]): number => {
    let total = 0;
    arr.forEach((num) => {
        total += num;
    });
    console.log('Sum of all numbers in array: ' + total);
    return total;
};

sum1([1, 4, 6, 7, 8, 2]);

const mass1: number[] | string[] = [];
const num1: number[] = [1, 2, 3];
const stri1: string[] = ['test', 'test'];

const multy1 = (data: number[] | string[]): void => {
    if (data.length === 0) {
        console.log('Warning: Array is empty!');
        return;
    }
    if (typeof data[0] === 'number') {
        for (const digit of data) console.log('Number: ' + digit);
    } else {
        for (const str of data) {
            console.log('String: ' + str);
        }
    }
};
console.log('Array of Numers');
multy1(num1);
console.log('Array of Strings');
multy1(stri1);
console.log('Array if empty');
multy1(mass1);
