let sequence = [];

function fibonacci(a, b, length){
  let temp = a+b;
  
  // loop for length amount of times
  if (length <= 0){
    return sequence;
  }
  sequence.push(b);
  // a = b;
  // b = temp;

  return fibonacci(b, temp, length-1);
}

console.log('Fibonacci numbers:')
console.log('==========================================================================')
console.log((fibonacci(0, 1, 100)));

