// .length
let cars = ['ford', 'buick', 'bmw', 'tesla']
console.log(cars.length)

// .concat
let moreCars = ['chevrolet', 'volkswagon', 'dodge', 'honda']
let totalCars = cars.concat(moreCars)
console.log(totalCars)

// .indexOf() and .lastIndexOf()
console.log(totalCars.indexOf('honda'))
console.log(totalCars.lastIndexOf('ford'))

// .join()
let stringOfCars = totalCars.join(',')
console.log(stringOfCars)

// .split()
let carsFromString = stringOfCars.split(',')
console.log(carsFromString)

// .reverse()
let carsInReverse = carsFromString.reverse()
console.log(carsInReverse)

// .sort()
carsInReverse = carsInReverse.sort()
console.log(carsInReverse.indexOf('bmw'));

// .slice()
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4, 6)
console.log(reptiles)
console.log(pets)

// .splice()
let removedReptiles = pets.splice(4, 2, 'hamster')
console.log(removedReptiles)
console.log(pets)

// .pop()
let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

// .push()
pets.push(removedPet)
console.log(pets)

// .shift()
console.log(pets.shift())

// .unshift()
pets.unshift('turtle')
console.log(pets)

// .forEach()
const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

const addTwo = (num, index, arr) => {
  return num + 2;
}

numbers.forEach((num, index, arr) => {
  arr[index] = addTwo(num, index, arr);
});

console.log(numbers);

