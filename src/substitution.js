// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = {
  // you can add any code you want within this function scope
  //add needed info
  substitution:function (input, alphabet, encode) {
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  //check for duplicates in new alphabet
  const findDuplicates = (str) => {
    const chars = {};
     for (const char of str) {
         chars[char] = (chars[char] || 0) + 1;
     }
     return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
 }
  //make sure the new alphabet meets length requirements
  if (alphabet === undefined||alphabet.length > 26 || alphabet.length < 26) {
    return false
  }
  if (findDuplicates(alphabet).length > 0) {
    return false
  }
  if ((encode == undefined)) {
    return substitution(input, alphabet);
  } else {
    return decodeSubstitution(input, alphabet);
  }

  function specialChars(str) {
    const specialChars = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    return specialChars.test(str);
  }

  // convert into cipher
  function substitution(input, alphabet) {
    let result = "";
    input = input.toLowerCase();
    for (let letter in input) {
      if (specialChars(input[letter])) {result += input[letter]}
      else {
      let index = normalAlphabet.indexOf(input[letter]);
      result += alphabet[index];
      }
    }
    return result;
  };
  
  // deconvert cipher
  function decodeSubstitution(input, alphabet) {
    let result = "";
    input = input.toLowerCase();
    for (let letter in input) {
      if (specialChars(input[letter])) {result += input[letter]}
      else {
      let index = alphabet.indexOf(input[letter]);
      result += normalAlphabet[index];
      }
    }
    return result;
  }
  }
};




module.exports = substitutionModule
