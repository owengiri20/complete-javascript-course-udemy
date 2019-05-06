///////////////////////////////////////
// Lecture: Hoisting
// caclAge(2000);

// function caclAge(year) {
//   var age = 2019 - year;
//   console.log(age);
//   return age;
// }

// retirementAge(2000); // error

// var retirementAge = function(year) {
//   console.log(65 - caclAge(year));
// };

// retirementAge(2000);

// variables
// console.log(age); // undefined
// var age = 23; // if this is removed line above would give an error
// console.log(age);

// function foo() {
//   console.log(age);
//   var age = 65;
//   console.log(age);
// }
// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

// var a = "Hello!";
// first();

// function first() {
//   var b = "Hi!";
//   second();

//   function second() {
//     var c = "Hey!";
//     console.log(a + b + c);
//   }
// }

// Example to show the differece between execution stack and scope chain

// var a = "Hello!";
// first();

// function first() {
//   var b = "Hi!";
//   second();

//   function second() {
//     var c = "Hey!";
//     // console.log(a + b + c);
//     third();
//   }
// }

// function third() {
//   var d = "John";

//   // gives an error...
//   // because third() cannot access variable b, c
//   //   console.log(a + b + c + d);
//   console.log(c);
// }

///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

var John = {
  name: "John",
  yearOfBirth: 1990,
  caclAge: function(params) {
    var age = 2019 - this.yearOfBirth;
    console.log(age);

    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
    return age;
  }
};

John.caclAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1988
};

mike.caclAge = John.caclAge;
mike.caclAge();
