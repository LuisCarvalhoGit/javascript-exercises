const findTheOldest = function(people) {

    let oldest = people[0]
    let year = new Date().getFullYear()

    for (let person of people) {

        const personDeathYear = person.yearOfDeath ?? year;
        const oldestDeathYear = oldest.yearOfDeath ?? year;

        const personAge = personDeathYear - person.yearOfBirth;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        if (personAge > oldestAge)
            oldest = person

        
    }

    return oldest

};

// Do not edit below this line
module.exports = findTheOldest;
