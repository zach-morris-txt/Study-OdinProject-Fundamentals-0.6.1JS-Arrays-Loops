const palindromes = function (string) {
    //efficient and non-repeating 
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;


    // let stringReversed = ""
    // for (let i = 0; i < string.length; i++) {
    //     stringReversed = stringReversed.concat(string[string.length - (i + 1)])     //fill empty string with each string value reverse order
    // }
    // if (stringReversed === string) {
    //     return true
    // } else {
    //     return false
    // }
};

// Do not edit below this line
module.exports = palindromes;
