//using function as constructor

function Human(name) {
  this.name = name;
  //   this.sayHi = function () {
  //     console.log("Hi from", this.name);
  //   };
}

Human.prototype.sayHi = function () {
  console.log("Hi from", this.name);
};

console.log(Human.prototype);

let anubhav = new Human("Anubhav");
anubhav.sayHi();
console.log(anubhav);
