const leapYears = function(year) { //logic needs to be handled backwards
    if (year % 400 === 0) {
        return true
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
