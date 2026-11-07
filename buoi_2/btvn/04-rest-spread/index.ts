function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(10, 20));

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [...arr1, 4, 5];

console.log(arr2);

const person = { name: "Alice", age: 25 };
const employee = { ...person, job: "Developer" };

console.log(employee);
