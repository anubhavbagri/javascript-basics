class Human {
  static listing = [];

  constructor(name) {
    this.name = name;
    this.alive = true;
    Human.listing.push(this);
  }

  dance = function () {
    console.log(this.name, "is dancing");
  };

  static kill_shooter = function (human1, human2, target) {
    if (human1.alive && human2.alive) {
      if (target instanceof Shooter && target.alive) {
        target.alive = false;
        console.log(`${human1.name} and ${human2.name} killed ${target.name}`);
      }
    }
  };
}

class Shooter extends Human {
  constructor(name) {
    super(name); // calling parent's constructor
    this.kills = 0;
  }

  kill = function (target) {
    if (!this.alive) {
      console.log(this.name, "is already dead, cannot kill.");
      return;
    }

    //in case of object reference; kya voh same object pe point kar rahe hai ya nahi
    if (this === target) {
      console.log(this.name, ": Suicide is never an option.");
      return;
    }

    if (target.alive) {
      target.alive = false;
      console.log(this.name, "killed", target.name);
      this.kills += 1;
    } else {
      console.log(target.name, "is already dead.");
    }
  };
}
// class Zombie extends Human {
//   constructor(name) {
//     super(name); // calling parent's constructor
//     this.kills = 0;
//     this.alive = false;
//   }
// }

let anubhav = new Human("Anubhav Bagri");
let ravi = new Human("Ravi Saxena");
let sahil = new Shooter("Sahil Verma");
let rohan = new Shooter("Rohan Tripathi");

// anubhav.dance();
// sahil.dance();

console.log(anubhav);
console.log(sahil);

// rohan.kill(sahil);
sahil.kill(sahil);
sahil.kill(anubhav);
sahil.kill(ravi);

Human.kill_shooter(anubhav, ravi, rohan);

// sahil.kill(anubhav);
// sahil.kill(anubhav);
console.log(Human.listing);
