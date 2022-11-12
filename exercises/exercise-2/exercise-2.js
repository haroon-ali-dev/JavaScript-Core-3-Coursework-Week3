let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];


function showGryffindor(hogwarts) {
  const filtered = hogwarts.filter(person => person.house === "Gryffindor");

  const [p1, p2, p3, p4, p5] = filtered;

  console.log(`${p1.firstName} ${p1.lastName}`);
  console.log(`${p2.firstName} ${p2.lastName}`);
  console.log(`${p3.firstName} ${p3.lastName}`);
  console.log(`${p4.firstName} ${p4.lastName}`);
  console.log(`${p5.firstName} ${p5.lastName}`);
}

showGryffindor(hogwarts);

function showPets(hogwarts) {
  const filtered = hogwarts.filter(person => person.occupation === "Teacher" && person.pet);

  const [p1] = filtered;

  console.log(`${p1.firstName} ${p1.lastName}`);
}

showPets(hogwarts);