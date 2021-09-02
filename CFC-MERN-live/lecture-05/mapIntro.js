const fruits = new Map();

fruits.set("apple", "a sweet red fruit");
fruits.set("mangoes", "King of fruits");
fruits.set("grapes", "a sour fruit");

console.log(fruits);
console.log(fruits.get("apple"));

// console.log(fruits.keys());

for (const item of fruits.keys()) {
  console.log(item);
}
