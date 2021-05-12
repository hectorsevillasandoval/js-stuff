const fruits = () => {
  if (true) {
    var fruits1 = 'apple'; // Global scope
    let fruits2 = 'banana'; // Block scope
    const fruits3 = 'kiwi'; // Block scope
  }
  console.log(fruits1, fruits2, fruits3); // log: apple
};

fruits();

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x); // log: 2 1

var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x); // log: 2 2

const anotherFunctionTwo = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

/**
 *  logs: ten times 10 when using var
 * 0-9 when using let
 * */
anotherFunctionTwo();
