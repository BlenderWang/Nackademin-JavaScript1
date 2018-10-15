//Övning 1
/*
const kurs = [
    {
        kursnamn: 'Introduktion och Projektmetoder',
        lärare: 'Per Söderberg',
        antal: 15,
        betyg: 'VG',
        avklarad: true
    },
    {
        kursnamn: 'JavaScript 1',
        lärare: 'Mahmud Al Hakim',
        antal: 25,
        betyg: null,
        avklarad: false
    },
    {
        kursnamn: 'HTML och CSS',
        lärare: 'Mahmud Al Hakim',
        antal: 20,
        betyg: null,
        avklarad: false
    }
];*/
function Course(courseName, teacher, totalPoints, grade, complete) {
    this.couseName = courseName;
    this.teacher = teacher;
    this.totalPoints = totalPoints;
    this.grade = grade;
    this.complete = complete;
}
const course1 = new Course('Introduktion och Projektmetoder', 'Per Söderberg', 15, 'VG', true);

console.log(course1.couseName);

//Övning 2
/*
const recept = [
    {
        title: 'Red Curry',
        instruction: `1. Värma olja och tillsätt curry paste och låt puttra i ca 2 minuter. 2. lägg i kycklingen(som är delat i mindre bitar) och puttra i ca 1 minut...`,
        ingredients: [
            '1 msk olja (ej oliv)',
            '1 msk red curry paste',
            '2 st kyckling Filè',
            '...'
        ]
    },
    {
        title: 'Ärtsoppa',
        instruction: `1. Blötlägg ärterna i vatten och salt 6-12 timmar. 2. Häll av vattnet....`,
        ingredients: [
            '500 gram ärtor, gula torkade',
            '300 gram fläsklägg , rimmat, eller bogfläsk',
            '1,5 l vatten',
            '...'
        ]
    }
];*/
function Recept(title, instruction,ingredients) {
    this.title = title;
    this.instruction = instruction;
    this.ingredients = ingredients;
}
const recept1 = new Recept('red curry', 'blablabla', ['1 msk olja (ej oliv)', '1 msk red curry paste', '2 st kyckling Filè',]);
console.log(recept1);

//Övning 3
/*
function delayAlert() {
    window.setTimeout(window.alert, 5000, 'Anmäl dig till vårt nyhetsbrev och få 10% rabatt idag');
}
delayAlert();*/

function delayAlert() {
    alert('Anmäl dig till vårt nyhetsbrev och få 10% rabatt idag');
}
setTimeout(delayAlert, 2000);


//some exemple shown in class
const innerWidth = 100;
function demo() {
    console.log(`${innerWidth}px`);
}
demo();