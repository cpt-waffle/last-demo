// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.

// const array = process.argv;


const sum = function(array) {
  
  console.log("loop");
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    // +array[i] shorthand
    result = result + Number(array[i]);
    console.log(array[i]);
  }
  
  return result;
}

//  Test Cases -----------------------------------------
const arr2 = [9,9,1,1];
const value = sum(arr2);
console.log('the sum is ', value);


const commandLineArgumentsArray = process.argv.slice(2);
const value2 = sum(commandLineArgumentsArray);
console.log('the sum is ', value2);

