
function truthCheck(collection, pre) {
  //every() returns true or false depending on the function it takes
  return collection.every(function (propertys) {
    return propertys[pre]
  }

  )
};

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }],
  "sex")

  //36 mins