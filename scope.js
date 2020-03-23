// var secretFunction = function () {
//   var pinCode = [0, 0, 0, 0];
//   console.log('pinCode inside secretFucntion', pinCode);
// };

// secretFunction();
// console.log('pinCode outside secretFunction', pinCode);

// secretFunction();
// console.log('name outside secretFunction', name );

// Block Scope Let

var filterNamesFirstLetter = function(names, letter) {
  var filteredNames = [];
  for (let name of names) {
    if (name[0] === letter) {
      filteredNames.push(name);
    }
  }
  return filteredNames;
}

var students = ['Ariane', 'Ian', 'Stephen', 'Rob', 'Matthew', 'Richard'];
var filteredStudents = filterNamesFirstLetter(students, 'R');
// console.log('Filtered Students: ', filteredStudents);

let isItFive = function(number) {
  let result;
  if (number === 5) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// console.log('Is it 5?', isItFive(5));

let temperature = 30;

if (temperature < 15) {
  let jacket = false;
  var happy = true;
} else {
  let jacket = true;
  var happy = false;
}

// console.log('jacket after if-else block', jacket);
// console.log('happy after if-else block', happy);

// Constants with const

const calculateEnergy = function(mass) {
  const speedOfLight = 299792458; // m/s
  return mass * speedOfLight ** 2; // J
}

calculateEnergy = () => 0
let energyOfMe = calculateEnergy(72);
console.log('My energy is:', energyOfMe, 'J');