/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

//The following imports will be used from line 173-ish.
import * as Maths from './Math'; 
import { add, divide, PI }  from './Math'; 

import Animal from './Animal';



logTitle('Variables');
/* coding examples */

var nam = "Kidda Yaar";
var age = 21;
var hasDriverLicence = true;

const person = {
   name: { 
      firstName: "Kidda",
      secondName: "Dude"
   },
   age: 21,
   hadDrivingLicence: true,
   qualifications: [
      {
         title: "HND",
         grade: "Pass"
      },
      {
         title: "Advanced Diploma",
         grade: "Pass"
      },
      {
         title: "BSc (Hons)",
         grade: "2:2"
      },
      {
         title: "BEng (Hons)",
         grade: "1st"
      }
   ],
   licences:{
      first: {
         title: "Forklift",
         type: "Counterbalance",
         grade: "Pass"
      },
      second: {
         title: "Forklift",
         type: "Reach",
         grade: "Pass"
      },
      third: {
         title: "Car",
         type: "Manual",
         grade: "Pass"
      }
   }
};

log("firstName: " + person.name.firstName);
log("title: " + person.qualifications[2].title);
log("licence first title " + person.licences.first.title);
log("object licence first: " + Object.values(person.licences.first));

log("The whole person, stringified: " + JSON.stringify(person));
log("Person age: " + person.age);

const names = ['Kidda', 'Yaar', "Dude", "Brain", "Pinky", "Bebe", "genius", "insane", "Sid the Sloth"];
log("Second element of names array: " + names[1]);
log("length of names array: " + names.length);


log("***FUNCTIONS***");

// The following line will 'return' an array of keys from the person object.
log(Object.keys(person));
// The following line will 'return' an array of values from the person object.
log(Object.values(person));



for (const name of names) {
   log("For-of loop - Element in names array: " + name);
}

for (const qual of person.qualifications) {
   log("For-of loop - qualification title: " + qual.title);
   log("For-of loop - qualification grade: " + qual.grade);
}

names.forEach(function(name, index) {
   log("forEach Loop - names array, index and name: " + index + " " + name);
});


const qualifics = [
      {
         title: "HND",
         grade: "Pass",
         marks: 77
      },
      {
         title: "Advanced Diploma",
         grade: "Pass",
         marks: 67
      },
      {
         title: "BSc (Hons)",
         grade: "2:2",
         marks: 65
      },
      {
         title: "BEng (Hons)",
         grade: "1st",
         marks: 91
      }
   ];


for (let i = 0; i < qualifics.length; i++) {
   log("For loop using index: " + qualifics[i].title + " - " + qualifics[i].grade);
}

let whileI = 0;
while (whileI < names.length) {
   log("while loop: " + names[whileI]);
   whileI += 1;
}


let doI = 0;
do {
   doI++;
   log("Do-while executed how many times: " + doI);
} while (doI < 3)


const qualArrayMap = qualifics.map(function(qual) {
   let theGrade = qual.grade;
   return qual.title + ": " + theGrade;
});

log(qualArrayMap);
log(qualArrayMap[1]);
for (const qualMap of qualArrayMap) {
   log ("Mapped Array contents: " + qualMap);
}


const qualArrayFilter = qualifics.filter(function(qual) {
   let theGrade = qual.grade;
   if (theGrade !== "Pass") {
      // log("Added to filtered array: " + qual.title);
      return qual;
   }
});

for (const qualFilter of qualArrayFilter) {
   log ("Filtered Array contents: " + qualFilter.title);
}


const qualArrayReduce = qualifics.reduce(function(accum, curr) {
   log("Reduce curr.marks: " + curr.marks);
   log("Reduce accum: " + accum);
   return accum + curr.marks;
}, 0);


log("Reduced Array marks: " + qualArrayReduce);


log("*** MATH IMPORT MANIPULATION ***");

// Imported as 'Math':
log("Math: " + Maths.subtract(3, 2));
log("Math: " + Maths.multiply(3, 2));
log("Math: " + Maths.divide(3, 2));
log("Math: " + Maths.add(3, 2));
log("Math PI: " + Maths.PI);

// Imported using their orginal names:
log("Imported: " + add(3, 2));
log("Imported: " + divide(3, 2));
log("Imported PI: " + PI);


const animal = new Animal();
log(animal.getClassType());


for (var theIndex = 0; theIndex < 3; theIndex++) {
   log("The index (inside for loop): " + theIndex);
}
log("The index (outside for loop: " + theIndex);


for (let theLetIndex = 0; theLetIndex < 3; theLetIndex++) {
   log("The theLetIndex (inside for loop): " + theLetIndex);
}
// // The following doesn't work...
// log("The theLetIndex (outside for loop): " + theLetIndex);


function varTest () {
   var vTest = 15;
   log("vTest in function: " + vTest);
}
varTest(); 
// // The following doesn't work...
// log("vTest outside function: " + vTest);


// Spread operator can be used with arrays AND with objects. But 
// be careful with objects where more than one field has the same
// name (the initial will be overwritten with the latter).

const pName = {
   firstName : "Kidda",
   lastName : "Yaar",
   town : "Glesga"
}

const pAddress = {
   number : 17,
   street : "High Street",
   town : "Glesga Tae!"
}

const pDetails = {...pName, ...pAddress};
log(JSON.stringify(pDetails, null, 2));


// *** ARROW FUNCTIONS ***

// const hello = function() {
//   const es6 = 'ES6';
//   return `Hello ${es6}`;
// };

// ...as an arrow function:

const hello = () => {
  const es6 = 'ES6';
  return `Hello ${es6}`;
};
log(hello());


// const powers = [1,2,3,4,5].map(function(number, index) {
//   return Math.pow(number, index);
// });

// ...as an arrow function (could remove the curly braces 
// and return in this example too):

const powers = [1,2,3,4,5].map( (number, index) => {
  return Math.pow(number, index);
});
log(powers);


// const newAdd = function(n1, n2) {
//   return n1 + n2;
// };

// ...as an arrow function:

const newAdd = (n1, n2) => n1 + n2;
log(newAdd(100,100));


// const milesToKm = function(miles) {
//   return miles * 1.60934;
// };

// ...as an arrow function, note that the brackets around the
// (single) arugment have also been removed:

const milesToKm = miles => miles * 1.60934;
log(milesToKm(100));


// *** Destructering Arrays ***

const newNames = ['Kidda', 'Yaar', "Dude", "Brain", "Pinky", "Bebe", "genius", "insane", "Sid the Sloth"];

// Leave out the name you do not want to 'pull' out of the array.
// The spread operator will pick up the remaining elements of the
// array - all those AFTER the last one that was specified. These
// will be in a new array.
const [awite, , geeza, , pinky, ...restOfNames] = newNames; 
log(`Destructuring Arrays: awite: ${awite}, geeza: ${geeza}, pinky: ${pinky}`);
log("Destructuring Arrays: " + restOfNames);


// *** Destructuring Objects *** 

const getPersonObject = () => {
   return {
      name: { 
         firstName: "Kidda",
         secondName: "Dude"
      },
      age: 21,
      hadDrivingLicence: true,
      qualifications: [
         {
            title: "HND",
            grade: "Pass"
         },
         {
            title: "Advanced Diploma",
            grade: "Pass"
         },
         {
            title: "BSc (Hons)",
            grade: "2:2"
         },
         {
            title: "BEng (Hons)",
            grade: "1st"
         }
      ],
      licences:{
         first: {
            title: "Forklift",
            type: "Counterbalance",
            grade: "Pass"
         },
         second: {
            title: "Forklift",
            type: "Reach",
            grade: "Pass"
         },
         third: {
            title: "Car",
            type: "Manual",
            grade: "Pass"
         
         }
      }
   }
};

const personObject = getPersonObject();

// Mixture of existing names (as in the objevt above, and 
// newly created) variable names.
// Existing variable names: name, qualifications, licences, first.
// Newly created variable names: theName, theFirst.
const { name : theName, qualifications, licences : { first : theFirst} } = personObject;

log("Destructured Object: " + theName.firstName + " " + qualifications[1].title + " " + theFirst.type);


