
// var outerDiv = document.getElementById('outer');

// outerDiv.addEventListener('mouseover', function(){
//     console.log("Mouse over");
// });

// outerDiv.addEventListener('mouseout', function(){
//     console.log("Mouse out");
// });

// var searchInput = document.getElementById('search');
// searchInput.addEventListener('keypress', function(){
//     console.log("Key pressed lmao");
// });


// document.addEventListener('keydown', function(){
//     console.log('Key Downed');
// });

// document.addEventListener('keydown', function(event){
//     console.log('Key Down', event.keyCode);
// });

// var innerDiv = document.getElementById('inner');
// innerDiv.addEventListener('click', function(event){
//     console.log('Click Inner Div');
//     event.stopPropagation();
// });

// var outerDiv = document.getElementById('outer');
// outerDiv.addEventListener('click', function(){
//     console.log('Click Outer Div');
// });

// document.addEventListener('click', function(){
//     console.log('Click Document');
// });

//"use strict";   //add a strict checking in Javascript

var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;  //even if we didn't specify var, it's still working but in strict mode, it won't work
box.addEventListener('click', function(){
    "use strict";
    count++;
    var demo = 100;
    console.log(count);
    clickCount.innerText = count + " ";
});










// function sayHello() {
//     alert('Hello!!');
// }
// function sayBye() {
//     alert('Byee!!');
// }
// // console.log("Hello");
// var helloButton2 = document.getElementById('btn2');
// // console.log(helloButton);
// helloButton2.addEventListener('click', sayHello);
// helloButton2.addEventListener('click', sayBye);