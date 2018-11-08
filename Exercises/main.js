// const antal = [];

// while(true) {
//     let tal = parseInt(prompt('Skriv gärna ett nummer:'));
//     if(tal === null) {
//         console.log('null');
//         break;
//     }
//     if(isNaN(tal)) break;
//     antal.push(tal);
// }
// console.log(antal);

// const min = Math.min(antal);
// console.log(`Min: ${min}`);

// let arr = [];
// //let tal = true;
// let max;
// let min;

// while(true){
//     let tal = prompt('skriv ett tal');
//     arr.push(tal);

//     if(tal === '' || tal === ' ' || tal === null)
//         break;

//     max = Math.max(...arr);
//     min = Math.min(...arr);

// }
// console.log('Max: ' + max + '\n' + 'Min: ' + min);

// const arr = [];
// while(true) {
//     let tal = prompt('Ange ett nummer');

//     if(tal === '' || tal === ' ' || tal === null) break;
//     if(isNaN(tal)) break;
//     //always run the consitions first or it'll return null/0
//     arr.push(tal);
// }
// const max = Math.max(...arr);
// const min = Math.min(...arr);

// console.log('Max: ' + max + '\n' + 'Min: ' + min);

// let i = 0;
// let n = 0;
// while(i < 5) {
//     i++;
//     if(i == 3) {
//         continue;
//     }
//     n += i;
//     console.log(n);
// }


// let row;
// let col;

// function createTable(row, col) {
//     let table = document.createElement('table');
//     table.setAttribute('border', '1');
//     //as long as row is less than totalYears keep looping
//     for(let i = 0; i < row; i++) {
//         //a detached <tr>
//         let tRow = document.createElement('tr');
//         //inner loop
//         for(let j = 0; j < col; j++) {
//             //a detached <td>
//             let tData = document.createElement('td');
//             tData.textContent = 'Year';
//             //append tData as many times as cols
//             tRow.appendChild(tData);
//         }
//         //just like how tData added to row add tRow to table
//         table.appendChild(tRow);
//     }
//     document.body.appendChild(table);
// }

// createTable(4, 2);

// /*getElementById works */
// const btn = document.getElementsByClassName('btn');
// console.log(btn);
// function bgColor() {
//     document.body.bgColor = 'red';
//     console.log('it works');
// }
// btn.onclick = bgColor;

// function count() {
//     document.getElementById('demo').innerHTML += '* ';
// }


/*  array exercises */
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const listOfInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  console.table(listOfInventors);

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.log(names);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
//   const oldest = inventors.sort(function(a, b) {
//       if(a.year > b.year) return 1;
//       else return -1;
//   });

  const oldest = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
  console.table(oldest);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  const totalYears = inventors.reduce((total, inventor) => {
     return total + (inventor.passed - inventor.year);
  }, 0);
  console.log(totalYears);

  // 5. Sort the inventors by years lived
  const yearsLived = inventors.sort((a, b) => {
      const lastGuy = a.passed - a.year;
      const nextGuy = b.passed - b.year;

      return lastGuy > nextGuy ? -1 : 1;
  });
  console.table(yearsLived);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
  });
  console.log(alpha);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const transportation = data.reduce(function(obj, item) {
    if(!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
  }, {});
  console.log(transportation);

// const people = [
//     {name: 'Wes', year: 1988},
//     {name: 'Kait', year: 1986},
//     {name: 'Ivy', year: 1970},
//     {name: 'Lux', year: 2015}
// ];

// const comments = [
//     {text: 'Love that!', id: 523423},
//     {text: 'Super good', id: 823423},
//     {text: 'You are the best', id: 2039843},
//     {text: 'Ramen is my fav food ever', id: 123523},
//     {text: 'Nice Nice Nice!', id: 542328}
// ];


// //Array.prototype.some() check if some of the peope is adult
// //Array.prototype.every() checks if every person is adult

// // const isAdult = people.some(function(person) {
// //     const currentYear = new Date().getFullYear();
// //     if(currentYear - person.year >= 19) return true;
// // });
// const isAdult = people.some(person => {
//     const currentYear = new Date().getFullYear();
//     return currentYear - person.year >= 19;
// });

// const allAdult = people.every(person => (new Date().getFullYear()) - person.year >= 19);

// console.log({allAdult});


// //Array.prototype.find()
// //is like filter() but instead returns just the one you're looking for

// // const comment = comments.find(function(comment) {
// //     if(comment.id === 823423) return true;
// // });
// const comment = comments.find(comment => comment.id === 823423);

// console.log(comment);


// //Array.prototype.findIndex()
// const index = comments.findIndex(comment => comment.id === 823423);

// console.log(index);

// //two ways to delete the item with index of 1
// //1st one is to use splice()
// // comments.splice(index, 1);

// const newComments = [
//     ...comments.slice(0, index),
//     ...comments.slice(index + 1)
// ];

// console.table(newComments);


// /* Array & Object Reference vs. Copy */
// // start with strings, numbers and booleans

// // Let's say we have an array
// const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// // and we want to make a copy of it.
// const players2 = players;
// // console.log(players, players2);

// // You might think we can just do something like this:
// // players2[3] = 'Lux';

// // however what happens when we update that array?

// // now here is the problem!
// // console.log(players2);

// // oh no - we have edited the original array too!

// // Why? It's because that is an array reference, not an array copy. They both point to the same array!

// // So, how do we fix this? We take a copy instead!

// // one way -- use slice()
// const teamOfPlayers = players2.slice();
// teamOfPlayers[3] = 'Lux';

// // or create a new array and concat the old one in
// const teamOfPlayers2 = [].concat(players);

// // or use the new ES6 Spread
// const teamOfPlayers3 = [...players];

// const teamOfPlayers4 = Array.from(players);
// teamOfPlayers4[3] = 'Lux';
// console.log(teamOfPlayers4, players);

// // now when we update it, the original one isn't changed

// // The same thing goes for objects, let's say we have a person object

// // with Objects
// const person = {
//     name: 'Wes Bos',
//     age: 80
// };

//     // and think we make a copy:

//     // how do we take a copy instead?
//     const captain = Object.assign({}, person, { number: 56 });
//     console.log(captain);
//     console.log(person);

//     // object ...spread
//     const captain2 = {...person};
//     console.log(captain2);

//     // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// const wes = {
//     name: 'Wes',
//     age: 30,
//     social: {
//         twitter: '@wesbos',
//         facebook: 'wesbos.developer'
//     }
// };

// const dev = Object.assign({}, wes);
// const dev2 = JSON.parse(JSON.stringify(wes));
// console.log(dev2);