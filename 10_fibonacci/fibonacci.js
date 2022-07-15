const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  let last = 0;
  let current = 1;
  let next = 1;
  for(i = 1; i < num; i++){
    next = last + current;
    last = current;
    current = next;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
