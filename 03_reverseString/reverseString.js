const reverseString = function(string) {
    let stringReversed = ""
    for (let i = 0; i < string.length; i++) {
        stringReversed = stringReversed.concat(string[string.length - (i + 1)])     //fill empty string with each string value reverse order
    }
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
