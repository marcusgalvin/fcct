//arr.flat() will be very useful for this algorithm
//spent some time trying to loop thru and flatten each iteration of arr
//then I came acrosss the arr.flat(infinity)
//done

function steamrollArray(arr) {

  for (var i = 0; i < arr.length; i++) {

    var flatten = arr.flat(Infinity);
    console.log(flatten)

    // var flatten = arr[i].flat()
    // console.log(flatten)

  }
  // I'm a steamroller, baby
  return flatten;
}

steamrollArray([1, [2], [3, [[4]]]]);

//21 mins
