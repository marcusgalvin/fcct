function fearNotLetter(str) {
  //set alphabet variable to compare the str too
  var alpha = "abcdefghijklmnopqrstuvwxyz"
  var alphaSplit = alpha.split('')
  //split str 
  str = str.split('')

  for (var i = 0; i < alphaSplit.length; i++) {

    if (str[i] != alphaSplit[i]) {
      return alphaSplit[i]
    }




  }

  // return str;
}

fearNotLetter("stvwx");
