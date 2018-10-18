//Övning -- chaining--pay more attention to f*cking spelling!!!
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1);
}

console.log(capitalize('aloha!'));

//Övning -- use ...(spread operator) as argument
/*
function maxArray(x, y, z) {
    return Math.max(x, y, z);
}
console.log(maxArray(3,6,9));*/

function maxArray(arr) {
    return Math.max(...arr);
}
console.log(maxArray([4,6,78,95]));


//Övning 1
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; //+1 cozgetMonth() returns numbers 0 - 9
const date = today.getDate();

if(month < 10) return '0' + month;
console.log(`${year}-${month}-${date}`);

//Övning2
const currentTime = new Date();
console.log(currentTime.toTimeString());

//Övning 3
const weekdays = ['Söndag', 'Måndag', 'Tisday', 'Onsdag', 'Torsday', 'Fredag', 'Lörday'];
const monthes = ['Januari', 'Febuari', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

const m = monthes[today.getMonth()];
const d = weekdays[today.getDay()];

console.log(`${d} den ${date} ${m} ${year}`);

//Övning 4
//se L9 > index.html

//Övning 5
function distance(x1, x2, y1, y2) {
   d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
   return d;
}

console.log(distance(1, 3, 5, 7));