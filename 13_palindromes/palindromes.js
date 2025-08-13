const palindromes = function (string) {

    const validChars = 'abcdefghijklmnopqrstuvwxyz1234567890'

    const cleanString = string
        .toLowerCase()
        .split('')
        .filter(value => validChars.includes(value))
        .join('')

    const reverseString = cleanString.split('').reverse().join('')

    if(cleanString === reverseString)
        return true
    else
        return false
};

// Do not edit below this line
module.exports = palindromes;
