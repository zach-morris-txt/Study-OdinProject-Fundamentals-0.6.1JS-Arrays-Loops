const findTheOldest = function(array) {
    let oldestPerson = { age: 0 }
    array.forEach((item) => {
        let age = item.yearOfDeath - item.yearOfBirth
        if (!item.yearOfDeath) {
            age = new Date().getFullYear() - item.yearOfBirth
        }
        item.age = age
        if (item.age > oldestPerson.age) {
            oldestPerson = item
        }
    })
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
