const leapYears = function(inputYear) {
    if (inputYear % 400 !== 0){
      return false;
    } else if (inputYear % 4 === 0) {
      return true;
    } else if (inputYear % 100 === 0){
      return true;
    }
    return false;
  }

// Do not edit below this line
module.exports = leapYears;
