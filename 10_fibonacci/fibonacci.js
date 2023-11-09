const fibonacci = function(sequenceNumber) {
    let immediateValue = 1
    let previousValue = 0
    //Loop
    for (let i = 0; i < sequenceNumber; i++) {
        let fibNum = immediateValue + previousValue
        previousValue = immediateValue
        immediateValue = fibNum
    }
    if (sequenceNumber <= 0) {
        return "OOPS"
    } else {
        return previousValue
    }
};

// Do not edit below this line
module.exports = fibonacci;
