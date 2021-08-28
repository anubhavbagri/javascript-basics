function square(num) {
  return num * num;
}

function say_hello() {
  console.log("Hello");
  //   return;
  //   return undefined;
}

// con;

let temp = say_hello;
say_hello = square;
square = temp;

square();
