/////////

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

////////

//going to check each array using a loop
//then, check the return value of each array using indexOf
//indexof in a loop will run through the enitre array
// if the return value = -1, the array does not match what it is being compared too whether its another array or just an element
//check each array with seperate loops??

function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    //check second array, to see if the of the values are contained in any iteration of array 1
    //while the second array does not contain any values of arr[i], push that value up to newArr
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  //since were only checking one array in the first loop
  //if each array has a unique word in it, we must check both
  //repeat the for loop but instead check arr2

  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }

  console.log(newArr);

  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
