const removeFromArray = function(array, ...values) {
  for(i = 0; i < values.length; i++){
    array = array.filter(function(value,index,arr){
      return value !== values[i];
    });
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
