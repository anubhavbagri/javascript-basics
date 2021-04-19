console.log(x);
var x = 10;

if (x <= 10) {
    console.log(y);         //error
    let y = 20;
}






var a = 10;
// console.log(a, b, c);

if (a <= 10) {
    let b = 40; //only area where b is available
} else {
    let c = 50; //only area where c is available
}

console.log(a, b, c);   //error