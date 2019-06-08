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
