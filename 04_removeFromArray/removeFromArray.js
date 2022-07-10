const removeFromArray = function(array, ...values) {
  array = array.filter(val => !values.includes(val));
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
