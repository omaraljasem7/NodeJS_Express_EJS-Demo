console.log(__dirname);
console.log(__filename);
const people = require('./people.js');
console.log(people.people);
console.log(people.ages);
const ages = people.ages;
ages.forEach(age => {
    console.log(age)
})

for(let i = 0; i<people.people.length; i++){
    console.log(people.people[i]);
}