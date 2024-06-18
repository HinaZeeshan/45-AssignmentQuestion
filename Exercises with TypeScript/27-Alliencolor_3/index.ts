// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.


//version 1 of program

let alien_color :string = "green"


if(alien_color === "green"){
    console.log("version 1 : the player earned 5 points");
}
else if(alien_color === "yellow"){
    console.log("the player earned 10 points");
}
else if(alien_color === " red"){
    console.log("the player earned 15 points")
}
else {
    console.log("choose the right color")
}

//version 2 of program

alien_color = "yellow"

if(alien_color === "green"){
    console.log("the player earned 5 points");
}
else if(alien_color === "yellow"){
    console.log("version 2 : the player earned 10 points");
}
else if(alien_color === " red"){
    console.log("the player earned 15 points")
}
else {
    console.log("choose the right color")
}

//version 3 of program

alien_color = "red"

if(alien_color === "green"){
    console.log("the player earned 5 points");
}
else if(alien_color === "yellow"){
    console.log("the player earned 10 points");
}
else if(alien_color === "red"){
    console.log("version 3 : the player earned 15 points")
}
else {
    console.log("choose the right color")
}



