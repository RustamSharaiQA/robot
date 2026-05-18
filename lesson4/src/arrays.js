const stringArray = ['apple', 'banana', 'orange'];

const numberArray = [1, 2, 3, 4];

const booleanArray = [true, false, true];

const anyArray = ['text', 10, true, null];

// forEach для string массива
stringArray.forEach((item) => {
    console.log(item);
});

// map для number массива
const doubledNumbers = numberArray.map((number) => {
    return number * 2;
});

console.log(doubledNumbers);

// forEach для boolean массива
booleanArray.forEach((value) => {
    console.log(value);
});

// map для boolean массива
const invertedBooleanArray = booleanArray.map((value) => {
    return !value;
});

console.log(invertedBooleanArray);

// forEach для any массива
anyArray.forEach((item) => {
    console.log(item);
});

// map для any массива
const convertedAnyArray = anyArray.map((item) => {
    return String(item);
});

console.log(convertedAnyArray);
