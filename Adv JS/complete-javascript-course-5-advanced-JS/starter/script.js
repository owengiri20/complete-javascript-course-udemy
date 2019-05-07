// Function Constructor
// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calcAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.gender = "male";

// var james = new Person("James", 2000, "Developer"); //instanciances
// console.log(james.name);
// james.calcAge();

// var Mark = new Person("Mark", 1948, "retired");
// Mark.calcAge();
// Mark.gender = "female";

// console.log(Mark.gender);

// practise

// var johnyBoy = {
//   name: "John",
//   lastName: "Boi",
//   gender: "Male"
// };

// // constructor function
// var Person = function(name, lastName, gender, age) {
//   this.name = name;
//   this.lastName = lastName;
//   this.gender = gender;
//   this.age = age;
// };

// // add inheritance prototyping
// Person.prototype.fullName = function() {
//   return `${this.name} ${this.lastName}`;
// };

// var jim = new Person("Jim", "Slice", "Male", 22);
// console.log(jim.fullName());

// Object.create
// var personProto = {
//   calcAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = "john";
// john.yearOfBirth = 1990;
// john.job = "digger";

// var jane = Object.create(personProto, {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1999 },
//   job: { value: "nigga" }
// });

// primitives vs objects

// primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // objects
// var obj1 = {
//   name: "John",
//   age: 44
// };

// var obj2 = obj1;
// obj1.age = 55;
// console.log(obj1.age);
// console.log(obj2.age);

// var obj99 = {
//   name: "bob"
// };

// var obj98 = obj99;
// obj98.name = "owen";

// console.log(obj98);
// console.log(obj99);

// functions
// var age = 27;
// var obj = {
//   name: "Owen",
//   city: "Perth"
// };

// function change(a, b) {
//   a = 30;
//   b.city = "Sydney";
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

//PASSING FUNCTIONS AS ARGS

// var years = [2008, 1998, 2002, 1989, 1978];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(el) {
//   return 2019 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return "under age";
//   }
// }

// var ages = arrayCalc(years, calcAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var heartRates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(heartRates);

// var years = [2002, 1990, 1998, 1978, 2000, 2010, 1950, 1983];

// function arrayCalc(arr, fun) {
//   var arrRes = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRes.push(fun(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(birthYear) {
//   return 2019 - birthYear;
// }

// // fullAge()
// function legal(age) {
//   return age >= 18;
// }

// // heartRate() 206.9 - 0.67 * el
// function calcHeartRate(age) {
//   if (age >= 18 && age <= 81) {
//     var rate = 206.9 - 0.67 * age;
//     return Math.round(rate);
//   } else {
//     return "too young";
//   }
// }

// // was 10
// function wasTen(year) {
//   return year + 10;
// }

// function ageCatergories(age) {
//   if (age < 15) {
//     return "yougin";
//   } else if (age > 15 && age < 18) {
//     return "still a kid";
//   } else if (age > 18 && age < 30) {
//     return "adult mofo";
//   } else if (age > 30 && age < 65) {
//     return "expirienced";
//   } else if (age > 65) {
//     return "old cunt";
//   }
// }

// var ages = arrayCalc(years, calcAge);
// var adults = arrayCalc(ages, legal);
// var hearRates = arrayCalc(ages, calcHeartRate);
// var tens = arrayCalc(years, wasTen);
// var ageCat = arrayCalc(ages, ageCatergories);
// console.log(ages);
// console.log(adults);
// console.log(hearRates);
// console.log(tens);
// console.log(ageCat);

// var years = [1999, 2009, 2001, 1989, 1978, 1983, 2005, 2010, 1997, 2007];
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(year) {
//   return 2019 - year;
// }

// var ages = arrayCalc(years, calcAge);
// console.log(ages);

//////////////////////////////////////////
// FUNCTIONS RETURNING FUNCTIONS

// function interviewQuestions(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + ", can you please explain what UX design is?");
//     };
//   } else if (job === "teacher") {
//     return function(name) {
//       console.log(name + ", what subject do you teach?");
//     };
//   } else if (job === "chef") {
//     return function(name) {
//       console.log(name + ", what's your favourite dish?");
//     };
//   } else {
//     return function(name) {
//       console.log("Hello, " + name + " what do you do");
//     };
//   }
// }

// var teacherQuestion = interviewQuestions("teacher");
// var designerQuestion = interviewQuestions("designer");
// var chefQuestion = interviewQuestions("chef");
// var dontKnow = interviewQuestions("nigga");

// interviewQuestions("disigner")("Owen");

// dontKnow("jim");
// chefQuestion("yefta");
// designerQuestion("Marry");
// teacherQuestion("Billy");

// function interviewQuestions(job) {
//   switch (job) {
//     case "teacher":
//       return function teacherQuestion(name) {
//         console.log(`${name}, how many hours do you work a week?`);
//       };
//       break;
//     case "developer":
//       return function developerQuestions(name) {
//         console.log(`${name} what languges do you  know?`);
//       };
//       break;
//     default:
//       console.log("what do you do");
//       break;
//   }
// }

// var teacher = interviewQuestions("teacher")("Bob");

//////////////////////////////////////////////////

// IIFE: Imedately Invoked Function Expresion
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function(){

// })();

// (function(goodLuck) {
//   var score = Math.random() * 10 + goodLuck;
//   console.log(score >= 5);
// })(5);

/////////////////////////////
// CLOSURES

// function retirement(retirementAge) {
//   var a = " years left until retirement";
//   return function(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     console.log(`${retirementAge - age} ${a}`);
//   };
// }

// var retirementAgeUS = retirement(66);
// var retirementAgeGER = retirement(65);
// var retirementAgeICE = retirement(67);

// retirementAgeUS(1999);

// // retirement(66)(1990);

// retirementAgeGER(1970);

// CLOSURES: interview Q's
// function interviewQuestions(job) {
//   var designerQuestion = ", How good are your UX skills?";
//   var teacherQuestion = ", Do you like working with kids?";
//   var other = ", what do you do for a living?";
//   return function(name) {
//     switch (job) {
//       case "teacher":
//         return function teacherFn() {
//           console.log(`${name}${teacherQuestion}`);
//         };
//         break;
//       case "designer":
//         return function disignerFn() {
//           console.log(`${name}${designerQuestion}`);
//         };
//         break;
//       default:
//         console.log(`${name}${other}`);
//         break;
//     }
//   };
// }

// interviewQuestions("teacher")("Billy")();
// var designQ = interviewQuestions("designer");
// designQ("Owen")();

// // doit with out inner functions
// var john = {
//   name: "John",
//   age: 26,
//   job: "Teacher",
//   presentation: function(style, timeOfDay) {
//     if (style === "formal") {
//       console.log(
//         `good morning ladies and gents my name is ${this.name}, I'm a ${
//           this.job
//         } I'm ${this.age} years old`
//       );
//     } else if (style === "friendly") {
//       console.log(
//         `Whats up what's up my name is ${this.name}, I'm a ${this.job} I'm ${
//           this.age
//         } years old`
//       );
//     }
//   }
// };

// var emily = {
//   name: "emily",
//   age: 35,
//   job: "designer"
// };

// // john.presentation("friendly", "morning");

// // john.presentation.call(emily, "friendly");

// // john.presentation.apply(emily, ["friendly", "afternoon"]) // no work in this example

// // Bind
// var emilyFriendly = john.presentation.bind(emily, "friendly", "afternoon");
// // emilyFriendly();

// var years = [1999, 2009, 2002, 2001, 1998, 1987, 1978];

// function arrayCalc(arr, fn) {
//   arrRes = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(year) {
//   return 2019 - year;
// }

// function isFullAge(limit, age) {
//   console.log(`age: ${age}   limit:${limit}`);

//   return age > limit;
// }

// var ages = arrayCalc(years, calcAge);
// // var adults = arrayCalc(ages, isFullAge)

// var adultsJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// // var adultAus = arrayCalc(ages, isFullAge.bind(this, 18));

// console.log(ages);
// console.log(adultsJapan);

// question game
var randomQuestion = Math.round(Math.random() * 2);
var score = 0;

// function constructor
function question(q, answers, correctAnswer) {
  this.q = q;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var questions = [
  new question(
    "what is the best programming language",
    ["Javascript", "Python", "C#"],
    0
  ),
  new question("How many fingers am i holding up?", ["1", "2", "3"], 2),
  new question("are dogs awesome?", ["YES", "NO", "Not Sure..."], 0)
];

(function askQuestion() {
  console.log(`your score: ${score}`);

  console.log(`${questions[randomQuestion].q}`);
  for (let i = 0; i <= 2; i++) {
    console.log(`${i}) ${questions[randomQuestion].answers[i]}`);
  }

  var userAnswer = prompt("enter your answer");
  if (userAnswer == questions[randomQuestion].correctAnswer) {
    2;
    console.log("correct answer...");
    score += 1;
  } else if (userAnswer == null || userAnswer == "x") {
    console.log(`YOUR FINAL SCORE: ${score}`);

    return;
  } else {
    console.log("wrong answer, try again...");
  }
  console.log("************************************");

  randomQuestion = Math.round(Math.random() * 1);
  askQuestion();
})();
