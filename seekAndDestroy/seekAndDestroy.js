function destroyer(arr) {
  //create an array out of the second/third arguments, then compare the two arrays and delete  exact matches?

  var result = [];

  //Array.from forces the passed in arr into one large array that im calling args
  var args = Array.from(arguments);
  // console.log(args)
  //now remove (splice) the other elements (not contained in first array + create a new array
  args.splice(0, 1);
  //now we have two arrays to compare
  // console.log(args)
  // console.log(arr)

  //loop thru 'arr' and 'args' to compare

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] == args[j]) {
        //delete matches
        delete arr[i];
      }
    }
  }
  // console.log(args)
  result = arr.filter(filterFunction);
  return result;
  console.log(result);
  // Remove all the values
}

//function to filter the remaining array
//filter iterates thru the array, + applys a function to each element, this function uses Boolean to check each elementValue for a 'truethy' values, if it is then it will return only the numbers, and junk all the commas, spaces, ext
function filterFunction(elementValue) {
  return Boolean(elementValue);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//54.3 mins
