//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items
//import chalk from 'chalk';

interface user{
    name: string,
    age : number,
    id : number,
    isStudent : boolean,
    nationality :string
}
//object user
let user :user = {
    name: "hina",
    age : 25,
    id : 4456,
    isStudent : true,
    nationality :"pakistani"
}
//print user
console.log(user);


interface car{
    model: number,
    maker: string,
    color: string,
    automatic: boolean
}
//object car
let car  = {
    model: 2018,
    maker: "toyota",
    color: "black",
    automatic: true
}
// print car
console.log(car);
