const removeFromArray = function(array, ...values) {
    values.forEach((value) => {
        if (array.includes(value)) {
            array.splice(array.indexOf(value), 1) //splice takes index value and quantity to remove (1)
        }
    })
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
