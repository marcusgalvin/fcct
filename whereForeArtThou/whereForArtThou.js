//whatIsInAname takes in two paramaneters, collection being the larger array and source
//the goal of this algorithms is to loop thru an array of objects and return an array of all the matching keys and values
function whatIsInAName(collection, source) {
  //use filter on the collection array of objects
  var arr = collection.filter(function(element) {
    //then loop thru source with a for in loop
    for (var i in source) {
      //check if the iteration of source matches the element paramaeter used in filter()
      //example for test case #1: "for every time that our source(capulet) matches the value in collection return true/ if not return false"
      if (source[i] != element[i]) {
        return false;
      }
    }
    return true;
  });
  //then return the array
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

//27.3 mins
