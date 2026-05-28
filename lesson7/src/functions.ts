function sum(arr: number[]): number {
    let total = 0;
    arr.forEach((num) => {
        total += num;
    });
    console.log('Sum of all numbers in array: ' + total);
    return total;
}

sum([1, 4, 6, 7, 8, 2]);

const mass: number[] | string[] = [];
const num: number[] = [1, 2, 3];
const stri: string[] = ['test', 'test'];

function multy(data: number[] | string[]): void {
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
}
console.log('Array of Numers');
multy(num);
console.log('Array of Strings');
multy(stri);
console.log('Array if empty');
multy(mass);
