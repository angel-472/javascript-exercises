const sumAll = function(from, to) {
  if(!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0){
    return "ERROR";
  }
  if(from > to){
    let temp = from;
    from = to;
    to = temp;
  }
  let output = 0;
  for(i = from; i <= to; i++){
    output = output + i;
  }
  return output;
};

// Do not edit below this line
module.exports = sumAll;
