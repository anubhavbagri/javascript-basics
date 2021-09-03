class Stack {
  #data = [];

  //   constructor() {
  //     this.#data = [];
  //   }

  push = function (value) {
    this.#data.push(value);
  };

  pop = function () {
    return this.#data.pop();
  };

  top = function () {
    return this.#data[this.#data.length - 1];
  };

  empty = function () {
    return this.#data.length == 0;
  };

  display = function () {
    console.log(this.#data);
  };
}

Stack.prototype.toString = function () {};

let stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(40);
stack.push(20);

stack.display();
