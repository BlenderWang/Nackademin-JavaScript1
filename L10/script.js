//Övning 1
const min = prompt('Antal minuter per månade:');
const fee = prompt('Kostnad per minut');
let total = min * fee;

if(min > 1000) {
    discount = total * 0.1;
    total = total - discount;
}

alert(`Månadens kostnad är ${total} kr och du får rabatt ${discount} kr.`);

//Övning 2
const prisÅrskort = prompt('Hur mycket kostar ett årskort');
const prisBiljett = prompt('Hur mycket kostar ett biljett');
const gånger = prompt('Hur många gånger planerar du att besöka gymet');

if(prisBiljett * gånger > prisÅrskort) {
    alert('Du behöver ett årskort!');
}else {
    alert('Du behover inte att köpa årskort!');
}

//Övning 3
const points = parseInt(prompt('Poäng: '));
switch(true) {
  case points >= 25 && points < 30:
  console.log('E');
  break;
  case points >= 30 && points < 35:
  console.log('D');
  break;
  case points >= 35 && points < 40:
  console.log('C');
  break;
  case points >= 40 && points < 45:
  console.log('B');
  break;
  case points >= 45 && points < 50:
  console.log('A');
  break;
  default:
  alert('Tyvär fick du IG!');
}
/*
if(points >= 25 && points < 30) console.log('E');
else if(points >= 30 && points < 35) console.log('D');
else if(points >= 35 && points < 40) console.log('C');
else if(points >= 40 && points < 45) console.log('B');
else if(points >= 45 && points < 50) console.log('A');
else console.log('IG');
*/