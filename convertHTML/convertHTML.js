//convert specific chars to HTML entitie equivs
//loop thru test cases
//a switch case might be helpful to target each symbol

//***** have to split the str first

function convertHTML(str) {
  // Split by character 
  var split = str.split("");

  //loop thru the array of chars and preform a switch case on each symbol when found
  for (var i = 0; i < split.length; i++) {
    switch (split[i]) {
      case "&":
        split[i] = "&amp;";
        break;
      case "<":
        split[i] = "&lt;";
        break;

      case ">":
        split[i] = "&gt;";
        break;
      case "'":
        split[i] = "&apos;";
        break;
      case '"':
        split[i] = "&quot;";
        break;

    }
  }

  split = split.join("");
  return split;
}

//test here
convertHTML("Dolce & Gabbana");
