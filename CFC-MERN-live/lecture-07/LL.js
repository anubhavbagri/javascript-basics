// class Human {
//   constructor(name, next = null) {
//     this.name = name;
//     this.next = next;
//   }
// }

// ravi = new Human("Ravi");
// katie = new Human("Katie");
// sachin = new Human("Sachin");
// tina = new Human("Tina");
// ram = new Human("Ram");

// ravi.next = katie;
// katie.next = sachin;
// sachin.next = tina;
// tina.next = ram;

// console.log(ravi.next);

// null and undefined -> indicate falseS

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
