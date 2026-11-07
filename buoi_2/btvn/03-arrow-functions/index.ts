const add = (a: number, b: number): number => a + b;

console.log(add(5, 3));

const multiply = (a: number, b: number): number => {
  const result = a * b;
  return result;
};

console.log(multiply(4, 5));

const greet = (): string => "Hello, TypeScript!";
console.log(greet());
