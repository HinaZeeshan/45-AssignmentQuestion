"use strict";
// Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
let magician = ["harry juggler", "tome juggler", "alvin magician", "Alex juggler"];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
