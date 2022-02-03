// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule ={
    caesar:function(input, shift, encode) {
      if (shift <= -26 || shift === 0 || shift >= 26) {
        return false;
      }
      if (encode == false) { shift *= -1}
      let result = "";
      let newInput = input.toLowerCase();
      for (let letter of newInput) {
        let char = letter.charCodeAt(0);
        if (char < 97 || char > 122) {
          result += letter;
        } else {
          let code = char + shift;
          if (code < 97) {
            code += 26;
          } else if (code > 122) {
            code -= 26;
          }
          result += String.fromCharCode(code);
        }
      }
      return result;
    }
};
module.exports = caesarModule;
