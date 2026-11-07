const map = new Map<string, string>();
map.set("name", "Alice");
map.set("city", "Hanoi");

console.log(map.get("name"));
console.log(map.has("city"));
console.log(map.size);

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

const set = new Set<number>([1, 2, 2, 3]);
console.log(set);

set.add(4);
set.add(2);
console.log(set.has(3));
console.log(set.size);
