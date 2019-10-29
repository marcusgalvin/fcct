//return an array with all unique values found in all test case arrays, in order with no duplicates
//plan of attack:
//combine all the arrays
//then loop or map through the concatinated array and remove dupes
//works with first test case
//problem is the amt of arguments is diff in each test case

//revised plan:
// just use array.from and the arguments object to combined every passed in array - into a nested array
//then use the flat() method to destroy the nested array, and simply use the Set method to kill all duplicates inside it

function uniteUnique(arr) {


  var args = Array.from(arguments);
  var args = [...arguments];

  //flatten all the args into one single array
  console.log(args.flat(1))
  var args = args.flat(1)


  let unique = [...new Set(args)];

  return unique

  //28 mins
