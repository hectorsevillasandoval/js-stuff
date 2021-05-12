const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits(); // log: apple
console.log(fruit); // log: fruit is not defined

const anotherFunction = () => {
  /**
   * Function scope: When you declare vars within a FN
   */
  var x = 1;
  var x = 2; // var allows to reasign variables(avoid using)
  let y = 1;
  //let y = 2; // we can't reasing let variables
  console.log(x, y);
};

anotherFunction(); // Identifier 'y' has already been declared
