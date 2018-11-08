//Uppgift 1
const tableHr = document.querySelector('.tableHr');
const res = document.querySelector('.result');

function saving() {
    let capital = parseInt(prompt('Hur mycket pengar vill du sätta in?'));
    let totalYears = parseInt(prompt('Hur många år ska pengarna stå inne?'));
    const interestRate = 3.5;

    if(isNaN(capital) || isNaN(totalYears)) break;

    for(let i = 1; i <= totalYears; i++) {
        capital = (capital * (1 + interestRate / 100)).toFixed(2);
        console.log(`${i}   ${capital * i}`);
        document.write(i + ' ' + capital + '<br>');
    }
}

saving();
tableHr.innerHTML = `År Belopp`;
// res.innerHTML = saving();
