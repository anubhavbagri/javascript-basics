let fruits = ["apple", "mango", "guava", "papaya"];

// fruits.forEach(function (item) {
//   console.log(item);
// });

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

//! prints element name
for (const item of fruits) {
  console.log(item);
}

//! print indices
for (const item in fruits) {
  console.log(item);
}

// function eat(fruit) {
//   console.log("Eat", fruit);
// }

// fruits.forEach(eat);
