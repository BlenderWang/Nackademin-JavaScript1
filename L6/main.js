/*
function meddelande() {
    console.log('Jag har anropats!');
}

meddelande();
meddelande();
meddelande();

function name(firstName, lastName) {
    //console.log('Hej' + ' ' + firstName + ' ' + lastName);
    console.log(`Hej ${firstName} ${lastName}`);
}

name('Rick', 'Sanchez');
*/

//Övning 1
//a.
function average(a, b) {
    return (a + b) / 2;
}
let result = average(15, 32);
console.log(result);

//b.
function averageOfThree(a, b, c) {
    let result = (a + b + c) / 3;
    return result;
}
console.log(averageOfThree(1, 2, 4));

//Övning 2

const name = prompt('Vad heter du?');

function greeting(name) {
    return `Hej ${name}!`;
}
document.write(greeting(name));


//Övning 3

const minPerMon = prompt('minutes');
const costPerMin = prompt('rate');

function monthlyCost() {
    alert(`Your total cost of conversation is ${minPerMon * costPerMin}`);
}
monthlyCost();

//Övning 4
const priceWithTax = prompt('How much does this item cost you?');
const taxRate = 0.3;

function calc() {
    const tax = priceWithTax * taxRate;
    const price = priceWithTax - tax;
    alert(`This item costs excl. tax ${price} dollar.
The tax for this item is ${tax} dollar.`);
    return;
}
calc();