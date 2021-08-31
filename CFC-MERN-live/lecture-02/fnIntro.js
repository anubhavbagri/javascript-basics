function square(num) {
  return num * num;
}

function say_hello() {
  console.log("Hello");
  //   return;
  //   return undefined;
}

// console.log(square(10));

// let value = say_hello();
// console.log(value);

let another = say_hello; //just equating the reference, hence they both point to the same object

another();

let temp = say_hello;
say_hello = square;
square = temp;

square();
// square();
console.log(say_hello(10));

console.log(say_hello);
console.log(square);
