class Human {
  //   static population = 0;
  static population = [];
  #name = undefined;

  // this -> current object in power
  constructor(name) {
    // this.name = name;
    this.#name = name;
    this.hands = 2;
    this.money = 1000;
    // Human.population += 1;
    Human.population.push(this);
  }

  accident = function () {
    if (this.hands > 0) {
      this.hands -= 1;
    }
  };

  party = function () {
    if (this.money >= 200) {
      this.money -= 200;
      console.log("Party Party");
    } else {
      console.log("Get some money");
    }
  };

  // getName = function () {
  //   return this.#name;
  // };

  get name() {
    // console.log("Someone tried fetching a name")
    // return undefined;
    return this.#name;
  }

  set name(val) {
    this.#name = val;
  }
}

let anubhav = new Human("Anubhav Bagri");
let ravi = new Human("Ravi garg");

anubhav.name = "New Anubhav";

// console.log(anubhav.#name); //!unavailable outside
// console.log(anubhav.getName()); //getter function works
console.log(anubhav.name);

ravi.accident();
// anubhav.hands = 2;
ravi.party();
// console.log(anubhav);
// console.log(anubhav, ravi);
console.log(Human.population);
