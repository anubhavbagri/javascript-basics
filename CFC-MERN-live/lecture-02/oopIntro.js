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

  get name() {
    return this.#name;
  }
}

let anubhav = new Human("Anubhav Bagri");
let ravi = new Human("Ravi garg");
ravi.accident();
ravi.party();
// anubhav.hands = 2;
console.log(anubhav, ravi);
console.log(Human.population);
