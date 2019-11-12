//step 1- check if the numbers are actual numbers, else return undefined

function addTogether() {

  //function to check is the numbers are real or not
  var isNumber = function (num) {
    if (typeof num !== number) {
      return undefined
    } else {
      return num
    }
  }

  console.log(arguments)
  //run the isNumber function on the two arguments
  if (arguments.length > 1) {
    let argumentOne = isNumber(arguments[0])
    let argumentTwo = isNumber(arguments[1])

    if (argumentOne === undefined || argumentTwo == undefined) {
      return undefined
    } else {
      return argumentOne + argumentTwo
    }

  }





}

addTogether(2, 3);
