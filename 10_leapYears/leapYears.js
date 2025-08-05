const leapYears = function(year) {

    // leap year -> year % 4 === 0
    // if year % 100 === 0, not leap year
    // if year % 100 === 0 && year % 400 === 0, leap year

    if(year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)) {
        return true
    } else {
        return false
    }
        


};

// Do not edit below this line
module.exports = leapYears;
