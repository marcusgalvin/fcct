function sumFibs(num) {
  //set some variables to create the Fib sequence counter
  var start = 0;
  var next = 1;
  var current;
  var sumOdd = 0;
  //now loop thru the 'num'
  for (var i = 0; i <= num; i++) {
    current = start + next;
    //start takes on value of nest when iterating
    start = next;
    //and next takes value of current
    next = current;
    console.log(current);
    //if the current number is divisible by 2 and is lessthan or equal to num
    //add current to sum of odds
    if (current % 2 !== 0 && current <= num) {
      sumOdd = current + sumOdd;
    }
  }
  //add one
  return sumOdd + 1;
}
sumFibs(4);
// logs 5