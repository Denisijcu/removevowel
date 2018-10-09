//factiorials

function factorial(n) {
  //set the end point
  if (n <= 1) {
    return 1;
  }
  //call the function recursively
  return n * factorial(n - 1);
}
console.log(factorial(4));



//fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return (fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(fibonacci(10));



//sum 1 to N
function sum1ToN(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sum1ToN(n - 1);
}

console.log(sum1ToN(5));

//multiples of 3
function multipleOf3(n) {
  if (n <= 0) {
    return 0;
  }
  //return (n - (n % 3)) + multipleOf3(n - (n % 3) - 3);
  return n + multipleOf3(n - 3);
}

console.log(multipleOf3(9));