// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }

const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
const favoriteNumber = 42;
const instuctor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// object methods

const teacher = {
  firstName: "Colt",
  sayHi() {
    return "Hi";
  },
  sayBye() {
    return this.firstName + " Says bye!";
  },
};

console.log(teacher.firstName)
// ## **createAnimal function**
const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
};

const cat = createAnimal("cat", "purr", "meow");
