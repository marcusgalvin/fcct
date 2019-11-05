//determine if the number is prime or not
//find out how many prime numbers are inside the passed in 'num'
//add them all together

//determine if the number is prime or not
//find out how many prime numbers are inside the passed in 'num'
//add them all together

function sumPrimes(num) {
  //declare variable to push answer too
  var sum = 0;

  //seperate function to check if 'num' is prime
  //pass in i, from for loop below
  function checkIfPrime(i) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  //
  for (var i = 2; i <= num; i++) {
    if (checkIfPrime(i)) {
      sum = sum + i;
    }
  }
  return sum;
}
sumPrimes(10);

//40 mins - will revisit when I have a better understanding of modulo