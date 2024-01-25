// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.


// Unknowns

// What is a command line arguments?
// console.log(process.argv); // the arguments start from 2nd index of the array
// How do i get them?
// return a number ?

// Knowns
// adding a number  (+)
// adding multiple numbers ( probably an array ) loop through numbers and use the + command

// cntr + / or cmd + /


// looping through command line arguments

const array = process.argv;
//          [1,2,3,4,5,6,7,8]
// index     0 1 2 3 4 

console.log("loop");
let sum = 0;
for (let i = 2; i < array.length; i++) {
  // console.log(i);
  // +array[i] shorthand
  sum = sum + Number(array[i]);
  console.log(array[i]);
}

console.log(sum);
