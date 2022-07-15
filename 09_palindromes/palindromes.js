const palindromes = function (input) {
  let regex = /[^a-zA-Z]+/g;
  let filteredInput = input.replaceAll(regex,'').toLowerCase();
  return reverseString(filteredInput) === filteredInput;
};

function reverseString(input) {
  let array = input.split("");
  return array.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
