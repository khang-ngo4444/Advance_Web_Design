const user = { name: "Alice", age: 30, city: "Hanoi" };
const { name, age } = user;

console.log(name);
console.log(age);

const { name: userName, city: userCity } = user;
console.log(userName);
console.log(userCity);

const numbers: number[] = [10, 20, 30];
const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);

const [a, , c] = numbers;
console.log(a, c);
