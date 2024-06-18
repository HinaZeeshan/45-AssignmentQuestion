"use strict";
// Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let allien_color = "green";
// • Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
if (allien_color === "green") {
    console.log("The player just earned 5 points !");
}
// • Write one version of this program that passes the if test and another that fails.
allien_color = "red";
// (The version that fails will have no output.)
if (allien_color === "green") {
    console.log("The player just earned 5 points !");
}
