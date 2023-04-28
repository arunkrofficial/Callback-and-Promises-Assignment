function ageInDays(person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;
  
  function logAgeInDays() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  }

  return logAgeInDays;
}
const person = {
  firstName: "Arun",
  lastName: "Kumar",
  age: 20
};

const logAge = ageInDays(person);
logAge(); // logs "The person's full name is Arun Kumar and their age in days is 7300."
