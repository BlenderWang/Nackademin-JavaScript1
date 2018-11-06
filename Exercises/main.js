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

/*getElementById works */
const btn = document.getElementsByClassName('btn');
console.log(btn);
function bgColor() {
    document.body.bgColor = 'red';
    console.log('it works');
}
btn.onclick = bgColor;

function count() {
    document.getElementById('demo').innerHTML += '* ';
}