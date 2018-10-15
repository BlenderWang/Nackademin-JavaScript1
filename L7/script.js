//Övning
const car = {
    name: 'fiat',
    model: '500',
    weight: '850kg',
    color: 'white',
    start: function() {
        return 'The car starts!';
    },
    drive: function() {
        return 'It goes 10000 miles an hour!';
    },
    brake: function() {
        return 'It stops!';
    },
    stop: function() {
        return 'Now it stops for real!';
    }
};
console.log(car.stop());


//Övning 1
const courseList = {
    name: "JavaScript1",
    instructor: "Mahamed",
    school: "Nackademin",
    totalWeeks: 8,
    period: 'First Semester'
};
console.log(courseList);

//Övning 2
function Car(registerNumber, make, model, year, gear, milage, productionYear, fuel) {
    this.registerNumber = registerNumber;
    this.make = make;
    this.model = model;
    this.year = year;
    this.gear = gear;
    this.milage = milage;
    this.productionYear = productionYear;
    this.fuel = fuel;
}

let car1 = new Car('A12345', 'GM', 'Cadillac', 8, 4, 12000, 2001, 'gasoline');
let car2 = new Car('C13579', 'BMW', 'BMW', 15, 6, 56900, 2003, 'gasoline');
let car3 = new Car('D12468', 'Fiat', 'Fiat', 2, 4, 2300, 2016, 'gasline');

console.log(car1.milage);
console.log(car2.registerNumber);
console.log(car3.gear);

//Övning 3
function swap(i, j) {
    let a = i;
    i = j;
    j = a;
    return [i, j];
}

console.log(swap(1, 2));