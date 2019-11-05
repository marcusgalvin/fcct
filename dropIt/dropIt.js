//run a loop, probably a while loop
//run the passed in function until it returns true
//shift() would be helpful here

function dropElements(arr, func) {
  //while the function is false in arr index 0
  var array = [];
  while (!func(arr[0])) {
    //use shift to drop the index's off until it finds the right one
    arr.shift();
  }

  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

//20.3 mins