// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function showName (firstName, lastName) {
  let nameIntro = 'Hello, my name is';
  function makeFullName () {
    return `${nameIntro} ${firstName} ${lastName}`;
  }
  return makeFullName();
}

console.log(showName('Amy', 'Truong'));

/*?*/
// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  
  function plusONe() {
    return num++
  }
  return plusONe(); /*?*/
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
 counter(); 
 counter(); 
 counter(); 





/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
