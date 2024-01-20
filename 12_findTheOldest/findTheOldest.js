const findTheOldest = function(people) {
    const sortedPeople = people.sort((a, b) => {
        const lastGuy = lastDate(a) - a.yearOfBirth;
        const nextGuy = lastDate(b) - b.yearOfBirth;
        return nextGuy - lastGuy;
    });
    return sortedPeople[0];
};

function lastDate(person) {
    const currentYear = (new Date()).getFullYear();
    return Object.hasOwn(person, 'yearOfDeath') ? person.yearOfDeath : currentYear;
}

// Do not edit below this line
module.exports = findTheOldest;
