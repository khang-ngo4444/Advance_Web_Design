const name: string = "John";
const age: number = 25;

const person = { name, age };

console.log(person);

const calculator = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  },
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
