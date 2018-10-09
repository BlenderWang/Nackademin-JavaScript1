/* Hur många element rymmer arrayen cars?
Vad innehåller arrayen exakt? */
let cars = new Array(2);
cars[cars.length] = "Volvo";
console.log(cars); //[ <2 empty items>, 'Volvo' ]

//isArray() dertermines if the passed values is an Array
Array.isArray(['Linus Torvalds', 'Richard Stallman', 'Dennis Ritchie']);   //return true
Array.isArray(new Array(5));    //return true

//sort() sorts the elements in an array in place and returns the array
const days = ['wednesday', 'thursday', 'friday', 'saturday'];
const sorted = days.sort();
console.log(sorted);

const num = [23, 892, 11];
console.log(num.sort());

//reverse() reverse the elements in an array. The last element becomes the first, vice versa
const podcast = ['Syntax', 'Linux Unplugged', 'Changelog', 'BlenderGuru', 'FreeCodeCamp'];
const reverseResult = podcast.sort().reverse();
console.log(reverseResult);

//concat() is used to merge two or more arrays. This method doesn't change the existing array instead returns a new array
const arr1 = ['z', 'h', 'o', 'u', 's'],
      arr2 = [1, 2, 5, 6],
      arr3 = [`It's alive`];
const concatResult = arr1.concat(arr2, arr3);
console.log(concatResult);

//join() creates and returns a new string by concatenating all of the elements in an array, seperated by a comma or a specified seperator string
const arr4 = ['A', 'song', 'of', 'ice', 'and', 'fire'];
//console.log(arr4.join());  returns A,song,of,ice,and,fire
//console.log(arr4.join('')); returns Asongoficeandfire
console.log(arr4.join(' ')); //returns A song of ice and fire

//toString() returns a string representing the specified array and its elements
const arr5 = [1, 2, 'feel good inc'];
console.log(arr5.toString());   //returns 1,2,feel good inc

//copyWithin() copies part of the array to another location in the same arrany and returns it without changing its size
const arr6 = ['a', 'b', 'c', 'd', 'e'];
//console.log(arr6.copyWithin(-1)); //returns ['a', 'b', 'c', 'd', 'a']; if negative, target will be counted from the end; if the start is omitted, default start places at index 0
//console.log(arr6.copyWithin(2, 4)); //returns ['a', 'b', 'e', 'd', 'e']
console.log(arr6.copyWithin(0, 2, 3)); //returns ['c', 'b', 'c', 'd', 'e']

//fill() fills all elements of an array from the start index to the end index. The end index is not included
const arr7 = [2, 4, 6, 8, 10];
console.log(arr7.fill(3, 1, 4)); //returns [2,3,3,3,10]

//from() creates a new, shallow-copied instance from an array-like iterable object
console.log(Array.from('schwifty')); //[ 's', 'c', 'h', 'w', 'i', 'f', 't', 'y']
console.log(Array.from([1, 3, 5], i => i + i)); //[2, 6, 10]

//includes() determines whether an array includes a certain elements, returns true or false
const people = ['Rick Sanchez', 'Morty Smith', 'Gary Goodspeed', 'Avocato', 'Mooncake'];
console.log(people.includes('Mooncake')); //true
console.log(people.includes('Lord Commander')); //false

//indexOf() returns the first index at which a given element is found, returns -1 if not found
console.log(people.indexOf('Rick Sanchez')); //0
console.log(people.indexOf('Lord Commander')); //-1

//lastIndexOf() returns the last index at which a given element can be found, or -1 if not found
const planets = ['earth', 'mars', 'saturn', 'jupiter', 'uranus', 'mercury', 'venus'];
console.log(planets.lastIndexOf('uranus')); //4
//arr.lastIndexOf(searchElement, fromIndex)
console.log(planets.lastIndexOf('mars', 2)); //1

//pop() removes the last elements of an array and returns that element. The method changes the array's length
console.log(planets.pop()); //['venus']

//push() adds one or more elements to an array and returns the new length of the array
console.log(planets.push('pluto')); //7
console.log(planets);   //['earth', 'mars', 'saturn', 'jupiter', 'uranus', 'mercury', 'pluto']

//shift() removes the first element of an array and returns the removed element.The method changes the length of the array
const removedPerson = people.shift();
console.log(removedPerson); //returns 'Rick Sanchez'
console.log(people.length); //4

//unshift() adds one or more element to the beginning of an array and returns the new length of the array
console.log(people.unshift('Summer Smith')); //5
console.log(people); //['Summer Smith', 'Morty Smith', 'Gary Goodspeed', 'Avocato', 'Mooncake']

//slice() returns a copy of part of an array selected from the begin and the end, end not included
const letters = ['h', 'i', 'p', 's', 't', 'e', 'r'];
console.log(letters.slice(4)); //['t', 'e', 'r']
console.log(letters.slice(4, 6)); //['t', 'e']
console.log(letters.length);

//valueOf() is the default method of the array object, returns the array without changing the original array
const letters1 = letters.valueOf();
console.log(letters1); //returns the same array as letters