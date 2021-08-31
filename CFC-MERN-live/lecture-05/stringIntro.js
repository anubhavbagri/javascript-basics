let hello = "Welcome to Code For Cause"; // every character is a unit length string

// for (let item of hello) {
//   console.log(item);
// }

// for (let item in hello) {
//   console.log(item);
// }

console.log(hello[2]);

// console.log(hello);

// string is immutable so we cannot change it
hello[1] = "x";
console.log(hello); //Still prints the same string
