const sumAll = function(int1, int2) {
    let rangedArray = []
    let sum = 0
    if (typeof int1 !== "number" || typeof int2 !== "number") { //Handle non-numbers
        return "ERROR"
    } else {
        if (int1 > int2) { //Handle larger first value
            let temp = int1
            int1 = int2
            int2 = temp
        }
        for (let i = int1; i <= int2; i++) {
                rangedArray.push(i)            
            }
    }
    rangedArray.forEach((item) => {sum = sum + item})
    if (sum < 0) { //Handle negatives
        return "ERROR"
    } else {
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
