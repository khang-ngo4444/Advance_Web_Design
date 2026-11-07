function* generateNumbers(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNumbers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);

function* countTo(n: number): Generator<number> {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

console.log("--- countTo(5) ---");
for (const num of countTo(5)) {
  console.log(num);
}
