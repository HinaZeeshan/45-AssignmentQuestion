// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//creating car variable
let car = 'subaru';

//test 1
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

//test 2
console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru')

//test 3

console.log("Is car != 'toyota'? I predict True.")
console.log(car != 'toyota')

//test 4
console.log("Is car !== 'suzuki'? I predict True.")
console.log(car !== 'suzuki')


//test 5
console.log("Is car.upper case == 'SUBARU'? I predict True.")
console.log(car.toUpperCase() == 'SUBARU')


//test 6
console.log("Is car == 'SUBARU'? I predict false.")
console.log(car == 'SUBARU')


//test 7
console.log("Is car === 'SUBARU'? I predict false.")
console.log(car === 'SUBARU')


//test 8
console.log("Is car === 'aeroplane'? I predict false.")
console.log(car === 'aeroplane')

//test 9
console.log("Is car === 'bi-cycle'? I predict false.")
console.log(car === 'bi-cycle')


//test 10
console.log("Is car === 'motorCycle'? I predict false.")
console.log(car === 'motorCycle')