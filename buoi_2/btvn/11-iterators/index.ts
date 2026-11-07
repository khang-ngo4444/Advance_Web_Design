const arr: number[] = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);

console.log("--- for...of ---");
for (const value of arr) {
  console.log(value);
}
