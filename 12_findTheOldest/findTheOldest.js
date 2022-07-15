const findTheOldest = function(people) {
  let oldest;
  let oldestAge = 0;
  people.forEach(person => {
    let age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
    if(age > oldestAge){
      oldestAge = age;
      oldest = person;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
