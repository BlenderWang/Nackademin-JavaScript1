//Övning
for(let i = 1; i <= 20; i++) {
    if(i%2 === 0)
    console.log(`De jämna tal mellan 1 och 20 är ${i}`);
}

//Övning
for(let i = 1; i < 100; i++) {
    if(i%5 === 0)
    console.log(i);
}

//Övning 1
let dag = 1;
let lön = 1;

while(lön <= 10000000) {
    dag++;
    lön = lön * 2;
    console.log(`Dag ${dag} tjänar du ${lön}kr.`);
}

//Övning 2
//how to get the same result with nested loop?
console.log('x1' + '\t' + 'x2' + '\t' + 'x3');
for(let x = 1; x <= 12; x++) {
    console.log(x + '\t' + Math.pow(x, 2) + '\t' + Math.pow(x, 3));
    //console.log(`${x}   ${Math.pow(x, 2)}   ${Math.pow(x, 3)}`);
}

//Övning 3
//can be rewritten with a for loop?
const antal = [];

while(true) {
    let tal = parseInt(prompt('Skriv gärna ett nummer:'));

    if(tal === '' || tal === ' ') break;    //if tal is equal to an empty string or equals to a space

    if(isNaN(tal) === true) break;

    antal.push(tal);
}
console.log(antal);
const min = Math.min.apply(null, antal);
const max = Math.max.apply(null, antal);
console.log(min + '\n' + max);

//Övning 4
const n = parseInt(prompt('Ange ett nummer:'));
if(Number.isInteger(n)) {
    function sum(n) {
        if(n === 0) return 0;
        else return n + sum(--n);
    }
}else {
    alert('Fel! Försök igen...');
}
console.log(sum(n));

//Övning 5
for(let i = 1; i <= 100; i++) {
    let j = ''; //an empty string to later hold the result
    if(i % 3 === 0) j += 'Fizz';
    if(i % 5 === 0) j += 'Buzz';
    console.log(j || i);
    //print the expletive words if any
    //if printing i first no expletive words are gonna be processed
}