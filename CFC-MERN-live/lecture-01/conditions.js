// < > <= >= == !=

// === : check both value and type

console.log(10 == "10"); //!true
console.log(10 == 10.1); //!false
console.log(10 === "10"); //!false

let value = 1 + "5"; //converting to string
console.log(value);
console.log(typeof value); //! string

let val = "5" - 1; //converts "5" to number (implicit type conversion)
let val2 = "5" / 1;
console.log(val);
console.log(val2);
console.log(typeof val); //!string

// let val1 = "ABCD" - 1;
let val1 = parseInt("ABCD");
console.log(val1);
