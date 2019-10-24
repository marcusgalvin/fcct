//I have tried to solve this w/o regex and could not
//this time im going to throw in a little regex to handle certain test cases

//first concat 'way' to the end of all the cases starting with a vowel
function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u", "y"];

  for (var i = 0; i < str.length; i++) {
    // console.log(vowels[i])
    // console.log(str[0])

    if (str[0] == vowels[i]) {
      var concat = str.concat("way");
      console.log(concat);
      return concat;
    }
  }

  //.match is a regex method
  //look for anything that starts with 'vowel' and give me the first vowel
  var vowel = str.match(/[aeiouy]/);
  // console.log(vowel)

  //now we have to identfy the index of the first vowel found
  var firstVowelPosition = str.indexOf(vowel);
  // console.log(firstVowelPosition)

  if (firstVowelPosition > 0) {
    return (
      str.slice(firstVowelPosition) + str.slice(0, firstVowelPosition) + "ay"
    );
    console.log(str);
  }
}

translatePigLatin("rhythm");

//40.2 mins
