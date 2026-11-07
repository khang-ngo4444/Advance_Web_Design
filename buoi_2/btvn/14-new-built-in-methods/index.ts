console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(5));

console.log("Hello".startsWith("He"));
console.log("Hello".endsWith("lo"));
console.log("Hello".startsWith("lo"));

const numbers = [10, 20, 30, 40];
const found = numbers.find((n) => n > 25);
console.log(found);

const foundIndex = numbers.findIndex((n) => n > 25);
console.log(foundIndex);

const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result);
