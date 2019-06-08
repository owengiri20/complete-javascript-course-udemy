////// Lecture: Let & Const

// /// ES5
// var name5 = "Jane Smith";
// var age5 = 23;

// name5 = "Jane Miller";
// console.log(name5);

// /// ES6
// const name6 = "John Smith";
// let age6 = 23;
// name6 = "John Miller";
// console.log(name6);

// ES5
// function driverLicense5(passedTest) {
//   if (passedTest) {
//     var firstName = "John";
//     var yearOfBirth = 1990;
//   }
//   console.log(firstName + " " + yearOfBirth + " legal");
// }

// driverLicense5(true);

// //ES6
// function driverLicense6(passedTest) {
//   //   console.log(firstName);

//   let firstName;
//   const yearOfBirth = 1990;

//   if (passedTest) {
//     firstName = "John";
//     // yearOfBirth = 1990;
//   }
//   console.log(firstName + " " + yearOfBirth + " legal");
// }

// driverLicense6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

/////IIFE ES6
// {
//   const a = 1;
//   let b = 2;
// }

// console.log(a + b);

// let firstName = "john";
// let lastName = "Smith";
// const yearOfBirth = 1990;

// function calcAge(year) {
//   return 2019 - year;
// }

// // template literals
// console.log(`This ${firstName}, ${lastName}`);

// const n = `${firstName} ${lastName}`;
// console.log(n.endsWith("h"));

// console.log(n.includes("Jo"));
// console.log(`${firstName} `.repeat(5));

// var f = function() {
//   console.log("hello");
// };

// let fn = x => {
//   console.log(x * 4);
// };

// let firstName = "john";
// let lastName = "Smith";
// const yearOfBirth = 2000;
// const calcAge = year => 2019 - year;

// // ES5
// console.log("this is the " + firstName);

// // ES6 - template literals
// console.log(`this is ${firstName}, today he is ${calcAge(yearOfBirth)}`);

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith("j"));
// console.log(n.includes("jn"));
// console.log(`${firstName} `.repeat(4));

// const years = [1990, 1965, 1982, 1937];

// // ES% MAP
// var ages5 = years.map(function(el) {
//   return 2019 - el;
// });

// console.log(ages5);

// // ES6

// // let ages6 = years.map((year, i) => `${i + 1}) ${2019 - year}`);

// let ages6 = years.map((year, i) => {
//   const now = new Date().getFullYear();

//   return now - year;
// });

// console.log(ages6);

//ES5
// var box5 = {
//   colour: "green",
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector(".green").addEventListener("click", function() {
//       var str = `this is box ${self.position} thus is ${self.colour}`;
//       alert(str);
//     });
//   }
// };

// box5.clickMe();

// var box6 = {
//   colour: "green",
//   position: 1,
//   clickMe: function() {
//     document.querySelector(".green").addEventListener("click", () => {
//       const str = `this is box ${this.position} thus is ${this.colour}`;
//       alert(str);
//     });
//   }
// };

// box6.clickMe();

// var box66 = {
//   colour: "green",
//   position: 1,
//   clickMe: () => {
//     document.querySelector(".green").addEventListener("click", () => {
//       const str = `this is box ${this.position} thus is ${this.colour}`;
//       alert(str);
//     });
//   }
// };

// box66.clickMe();

// // ES5
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(el) {
//       return `${this.name} is friends with ${el}`;
//     }.bind(this)
//   );

//   console.log(arr);
// };

// let f = ["bob", "Jane", "Mark", "Tony"];

// new Person("John").myFriends5(f);

// ES6
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.myFriends6 = function(friends) {
//   let arr = friends.map(el => `${this.name} is friends with ${el}`);
//   console.log(arr);
// };

// let friends = ["bob", "Jane", "Mark", "Tony"];

// let john = new Person("John");

// john.myFriends6(friends);

// DESTRUCTURING

// ES5
// const john = ["John", 26];
// // var name = john[0];
// // var age = john[1];

// // ES6
// const [name, age] = john;

// console.log(name, age);

// const obj = {
//   firstName: "John",
//   lastName: "Smith"
// };

// // const { firstName, lastName } = obj;

// const { firstName: a, lastName: b } = obj;
// console.log(a, b);

// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age);
// console.log(retirement);

// ARRAYS

// const boxes = document.querySelectorAll(".box");

// // ES5
// var boxArr5 = Array.prototype.slice.call(boxes);

// // boxArr5.forEach(function(currentBox) {
// //   currentBox.style.backgroundColor = "dodgerblue";
// // });

// // ES6
// const boxArr6 = Array.from(boxes); // transforms boxes nodelist to array
// boxArr6.forEach(currentBox => (currentBox.style.backgroundColor = "green"));

// ES5
// for (var i = 0; i < boxArr5.length; i++) {
//   if (boxArr5[i].className == "box blue") {
//     continue; // contintue just skips this part of the loop
//   }
//   boxArr5[i].textContent = "nigga";
// }

// ES6 for of
// for (const currentBox of boxArr6) {
//   if (currentBox.className.includes("blue")) {
//     continue;
//   }
//   currentBox.textContent = "--";
// }

// // ES5
// var ages = [12, 17, 8, 21, 14, 11];
// var fullAges = ages.map(function(curAge) {
//   return curAge > 18;
// });

// console.log(fullAges);
// console.log(ages[fullAges.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => cur >= 18));

// console.log(ages.find(cur => cur >= 18));

// SPREAD
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages); // calls addfourages with ages array as argument, first parameter is for the this, we dont need it in this example so we set it to null
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ["John", "Jane", "Mark"];
// const familyMiller = ["Marry", "Bob", "Dick"];

// const bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => {
//   cur.style.color = "red";
// });

// // for (const cur of all) {
// //   cur.style.color = "pink";
// // }

// console.log(all);

// REST PARAMETERs

// ES5
// function isFullAge5() {
//   // console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments);

//   argsArr.forEach(function(cur) {
//     console.log(2019 - cur >= 18);
//   });
// }

// // isFullAge5(1999, 1995, 2009);

// //ES6
// function isFullAge6(...years) {
//   years.forEach(curYear => {
//     console.log(2019 - curYear >= 18);
//   });
//   console.log(years);
// }
// isFullAge6(1999, 1995, 2009);

// function isFullAge5(limit) {
//   // console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments, 1);

//   argsArr.forEach(function(cur) {
//     console.log(2019 - cur >= limit);

//     console.log(argsArr);
//   });
// }

// isFullAge5(21, 1999, 1995, 2009);

// //ES6
// function isFullAge6(limit, ...years) {
//   years.forEach(curYear => {
//     console.log(2019 - curYear >= limit);
//   });
//   console.log(years);
// }
// isFullAge6(21, 1999, 1995, 200 9);

// DEFFAULT PARMETERS
// ES6
// function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality) {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// var john = new SmithPerson("John", 1990, "Jocobs");

// MAPS
// const question = new Map();
// question.set(
//   "question",
//   "What is the official name of the latest major JS version?"
// );
// question.set(1, "ES5");
// question.set(2, "ES6");
// question.set(3, "ES2015");
// question.set(4, "ES7");
// question.set("Correct", 3);

// question.set(true, "Correct answer");
// question.set(false, "Wrong answer");

// console.log(question.get("Correct"));
// console.log(question.size);
// // question.delete(4);
// question.delete(4);
// question.clear();

// SET
// GET
// DELETE
// CLEAR

// question.forEach((value, key) => {
//   console.log(`key: ${key}.  value: ${value}`);
// });

// for (const pair of question) {
//   console.log(`key: ${pair[0]}  value: ${pair[1]}`);
// }

// for (let [key, value] of question.entries()) {
//   if (typeof key === "number") {
//     console.log(`key: ${key}  value: ${value}`);
//   }
// }

// const ans = parseInt(prompt("write the correct answer"));
// console.log(question.get(ans === question.get("Correct")));

// maps are better because
// you can itterate through them
// you can put any data type
// easy to add remove data
// get size function

// CLASSES

// ES5

// var Person5 = function(firstName, yearOfBirth, job) {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calcAge = function() {
//   var age = new Date().getFullYear - this.yearOfBirth;
//   console.log(age);
// };

// var john5 = new Person5("John", 1990, "Teacher");

// // ES6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calcAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }

//   static greeting() {
//     console.log("hello world");
//   }
// }

// let jake = new Person6("Jake", 1999, "Developer");
// console.log(jake);

// jake.calcAge();

// // jake.greeting(); //error
// Person6.greeting();

// classes with sub classes / inheritance
// ES5

// var Person5 = function(firstName, yearOfBirth, job) {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calcAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// var Athlete5 = function(firstName, yearOfBirth, job, olympics, medals) {
//   Person5.call(this, firstName, yearOfBirth, job);
//   this.olympics = olympics;
//   this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
// };

// var lebron = new Athlete5("Lebron", 1984, "NBA", 3, 3);
// lebron.calcAge();
// lebron.wonMedal();

// ES6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calcAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }

// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympics, medals) {
//     super(name, yearOfBirth, job);
//     this.olympics = olympics;
//     this.medals = medals;
//   }

//   wonMedal() {
//     this.medals++;
//   }
// }

// const blake = new Athlete6("Blake", 1988, "Nba", 6, 7);

// parks and streets
// 3 and 4
// name and buil year

// ===Data====
// tree density of eache park in town
// average age of each town's park
// park with more than a thousand trees

// total avg length

// MY SOLUTION
// class Park {
//   constructor(name, buildYear, trees, area) {
//     this.name = name;
//     this.buildYear = buildYear;
//     this.trees = trees;
//     this.area = area;
//   }

//   calcAge() {
//     return new Date().getFullYear() - this.buildYear;
//   }

//   treeDensity() {
//     return this.trees / this.area;
//   }
// }

// class Street extends Park {
//   constructor(name, buildYear, slength, streetSize) {
//     super(name, buildYear);
//     this.slength = slength;
//     this.streetSize = streetSize;
//   }

//   static totalLength(lengths) {
//     let sum = 0;
//     let output = lengths.map(l => {
//       sum += l;
//     });
//     return sum;
//   }

//   static averageSLength(total, streetCount) {
//     return total / streetCount;
//   }
// }

// let park1 = new Park("Park1", 1999, 400, 6);
// let park2 = new Park("Park2", 1980, 1200, 2.7);
// let park3 = new Park("Park3", 1969, 800, 1.7);

// let street1 = new Street("Street1", 2005, 6700, 400);
// let street2 = new Street("Street2", 1987, 5677, 900);
// let street3 = new Street("Street3", 1979, 8999, 1200);
// let street4 = new Street("Street4", 1959, 7865, 600);

// let parks = [park1, park2, park3];
// let streets = [street1, street2, street3, street4];

// // average park age
// let averageParkAge = ages => {
//   let outputSum = 0;
//   let sumAges = ages.map(age => {
//     outputSum += age;
//   });
//   return outputSum / ages.length;
// };

// let ages = parks.map(park => {
//   return park.calcAge();
// });

// let slengths = streets.map(s => {
//   return s.slength;
// });

// console.log(
//   Street.averageSLength(Street.totalLength(slengths), streets.length)
// );

// let sizeClassification = new Map();
// sizeClassification.set(400, "Tiny");
// sizeClassification.set(600, "Small");
// sizeClassification.set(900, "Normal");
// sizeClassification.set(1200, "Huge");

// let spitData = () => {
//   console.log("==== PARKS REPORT ====");
//   console.log(
//     `our 3 parks have an average age of ${Math.round(averageParkAge(ages))}`
//   );
//   parks.forEach(park => {
//     console.log(
//       `${park.name} has a tree density of ${park.treeDensity()} per square km`
//     );
//   });
//   console.log(
//     `${parks.find(park => park.trees > 1000).name} has more than 1000 trees`
//   );
//   console.log("");

//   console.log("==== STREETS REPORT ====");
//   console.log(
//     `our 4 streets have a total ${Street.totalLength(
//       slengths
//     )} and an average of ${Street.averageSLength(
//       Street.totalLength(slengths),
//       streets.length
//     )}`
//   );
//   for (street of streets) {
//     console.log(
//       `${street.name} was built in ${
//         street.buildYear
//       } is a ${sizeClassification.get(street.streetSize)}`
//     );
//   }
// };

// spitData();

// SOLUTION

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; //km2
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} per squared km`);
  }
}

class Street extends Element {
  constructor(name, buildYear, slength, size = 3) {
    super(name, buildYear);
    this.slength = slength;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "huge");
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )}`
    );
  }
}

const allParks = [
  new Park("Green Park", 1986, 0.2, 217),
  new Park("Blue Park", 1967, 1.3, 300),
  new Park("Mowehonahaoon Park", 1917, 4.3, 4300)
];

const allStreets = [
  new Street("Hawk st", 1999, 1.2, 3),
  new Street("Jay St", 1987, 2, 4),
  new Street("koly St", 1997, 3),
  new Street("Mikionjijn St", 1967, 1, 1)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportPark(p) {
  console.log("==== PARKS REPORT ====");

  // Density
  p.forEach(el => el.treeDensity());

  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, averageAge] = calc(ages);

  console.log(`our ${p.length} has an average of ${averageAge} yaers`);

  // wich park has more than 100 trees
  //   let treeMore1000 = p.find(park => park.numTrees > 1000);
  //   console.log(`${treeMore1000.name} has more than 1000 trees`);
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);

  console.log(`${p[i].name} has 1000 or more trees`);
}

function reportStreet(s) {
  console.log("==== STREETS REPORT ====");
  const [totalLength, averageLength] = calc(s.map(el => el.slength));
  console.log(
    `Our ${
      s.length
    } streets have a total length of ${totalLength} km with an average ${averageLength}km`
  );

  s.forEach(s => s.classifyStreet());
}

reportPark(allParks);
reportStreet(allStreets);
