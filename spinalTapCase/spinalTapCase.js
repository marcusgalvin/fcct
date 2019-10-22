//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
//can this be done w/o regex?
//regex:
function spinalCase(str) {
  //this takes care of the test cases w/o regex
  //going to scrap it for now and try regex
  // var lowerCase = str.toLowerCase();
  // var split = lowerCase.split(" ");
  // var join = split.join("-");
  // console.log(join);

  //second attempt w/ regex and replace() - in fcc documentaion

  // match whitespace characters = \s_ and look in array []
  //g, = globallly
  //the below code will pass all the test cases with spaces already

  // return str.replace(/[\s_]/g, '-').toLowerCase();

  //now the test cases with camelCase must be seperated
  //capturing groups can help this
  //[a-z] and [A-Z] stand for the two capturing groups
  //match any lower case letter or uppercase letter
  //$1-$2 represent the same two captuing groups but this time joined by a '-'
  return str
    .replace(/[\s_]/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  return str;
}

spinalCase("This Is Spinal Tap");

//48 mins
