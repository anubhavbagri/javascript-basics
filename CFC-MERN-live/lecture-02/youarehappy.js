let happy = function (name, surname) {
  console.log("You are happy", name, surname);
};

setInterval(happy, 1000, "Anubhav", "Bagri"); // after every 1000 milliseconds, happy is called and "Anubhav" is the argument being passed to name
