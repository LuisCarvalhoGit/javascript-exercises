const reverseString = function(string) {

    let newString = "";
    let i = string.length - 1;

    for (i; i >= 0; i--) {

        newString = newString + string[i]
    }

    return newString


};

// Do not edit below this line
module.exports = reverseString;
