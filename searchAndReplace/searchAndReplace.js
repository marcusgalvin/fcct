//split the main sentence up from the 'before' and 'after' strings
//check letter casing (they want to preserve the casing when replacing the word)

function myReplace(str, before, after) {

  //handle the casing of the letters use an if statement
  //if the first char of 'before' = the same char btu UpperCase 
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {

    str = str.replace(before, after.charAt(0).toUpperCase(0) + after.slice(1))




  } else {

    //this is must sleeker than using indexOf, this replaces before/after
    str = str.replace(before, after)
  }

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

  //35.8 mins