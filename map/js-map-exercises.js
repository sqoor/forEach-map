var arr = [1, 2]

arr.map(x => x + 1)
arr.map(function (x) {
  return x + 1
})

function addMap(array) {
  var result = []
  for (let index = 0; index < array.length; index++) {
    var x = array[index]
    result[index] = x + 1;
  }
  return result
}


function addForEach(array) {
  for (let index = 0; index < array.length; index++) {
    var x = array[index]
    array[index] = x + 1;
  }
  return array
}
























console.log('Here is map: ')
/*
Instructions:
- You should solve all these questions using .map() function
*/
/*
* Exercise 1:
*
* Make an array of numbers that are doubles of the first array
*
* Test Case:
*
* console.log(doubleNumbers([2, 5, 100]));
*
* Result:
* [4, 10, 200]
*/


function doubleNumbers(arr) {
 // your code here
 return arr.map(element => element * 2);
}



/*
* Exercise 2 :
*
* Take an array of numbers and make them strings
*
* Test Case:
*
* console.log(stringItUp([2, 5, 100]));
*
* Result:
* ["2", "5", "100"]
*/


function stringItUp(arr) {
 // your code here
 return arr.map(element => element + '');
}



/*
* Exercise 3:
*
* Capitalize each of an array of names
*
* Test Case:
*
* console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
*
* Result:
*  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/



function capitalizeNames(arr) {
 // your code here
 return arr.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())
}





/*
* Exercise 4:
*
* Make an array of strings of the names
*
* Test Case:
*
*
*
console.log(namesOnly([{ name: "Angelina Jolie", age: 80}, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }]));
* Result:
*  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/


function namesOnly(arr) {
 // your code here
 return arr.map(obj => obj.name);
}






/*
* Exercise 5:
*
* Make an array of strings of the names saying whether or not they can go to The Matrix
*
* Test Case:
console.log(makeStrings([
  {
     name: "Angelina Jolie",
     age: 80
 },
 {
     name: "Eric Jones",
     age: 2
 },
 {
     name: "Paris Hilton",
     age: 5
 },
 {
     name: "Kayne West",
     age: 16
 },
 {
     name: "Bob Ziroll",
     age: 100
 }
]));
* Result:
*
* ["Angelina Jolie can go to The Matrix",
* "Eric Jones is under age!!",
* "Paris Hilton is under age!!",
* "Kayne West is under age!!",
* "Bob Ziroll can go to The Matrix"]
*  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/


function makeStrings(arr) {
 // your code here
 return arr.map(obj => {
   if(obj.age >= 18)
     return obj.name + " can go to The Matrix";
   else
     return obj.name + " is under age!!";
 });
}





/*
* Exercise 6:
*
* Make an array of the names in h1s, and the ages in h2s
*
* Test Case:
*
 console.log(readyToPutInTheDOM([
   {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
 ]));
* Result:
*
* ["<h1>Angelina Jolie</h1><h2>80</h2>",
* "<h1>Eric Jones</h1><h2>2</h2>",
* "<h1>Paris Hilton</h1><h2>5</h2>",
* "<h1>Kayne West</h1><h2>16</h2>",
* "<h1>Bob Ziroll</h1><h2>100</h2>"]
*/


function readyToPutInTheDOM(arr) {
 // your code here
 return arr.map(obj => '<h1>' + obj.name + '</h1> <h2>' + obj.age + '</h2>');
}



/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/


function doubleValues(arr) {
  // your code here
  return arr.map(element => element * 2);
}



/*
* Exercise 8:
* Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*
*
* Test Cases :
*   Test Case 1:  valTimesIndex([1,2,3])  
*   Test Case 2:  valTimesIndex([1,-2,-3]) 
* 
* Result
* Test Case 1: [0,2,6]
* Test Case 2: [0,-2,-6]
*/


function valTimesIndex(arr) {
  // your code here
  return arr.map((element, index) => index * element);
}



/*
* Exercise 9:
* Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
* of that key in each object.
* 
* Test Case:
* extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
* 
* Result:
* ['Elie', 'Tim', 'Matt', 'Colt']
*/


function extractKey(arr, key) {
  // your code here 
  return arr.map(element => element[key]);
}



/*
* Exercise 10:
* Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
* 
* Examples:
* extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/


function extractFullName(arr) {
  // your code here 
  return arr.map(element => element.first + ' ' + element.last);
}