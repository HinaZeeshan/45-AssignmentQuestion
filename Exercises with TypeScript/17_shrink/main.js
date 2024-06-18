"use strict";
// Shrinking Guest 
// List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest = ['tooba', 'ayan', 'arbab'];
// for (let i=0; i<guest.length; i++ ){
//     console.log('Dear'+ guest[i]+  ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n')
// }
let canNot = 'tooba';
let newGuest = "misha";
;
guest[0] = newGuest;
//  for (let i=0; i<guest.length; i++ ){
//     console.log('Dear'+ guest[i]+  ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n')
// }
console.log(canNot + " " + 'cannot come to join us');
console.log('good news! we found a bigger dinner table,we Think of three more guests to invite to dinner');
// add one person 
guest.unshift('ashar');
guest.splice(2, 0, 'miss Aiza');
guest.push('hassan');
for (let i = 0; i < guest.length; i++) {
    console.log('Dear' + guest[i] + ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n');
}
console.log('\nsorry we cannot arrange bog table ,only two people will invited.');
while (guest.length > 2) {
    let remove_guest = guest.pop();
    console.log(`sorry My dear...!${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guest.length; i++) {
    console.log('Dear' + guest[i] + ', \n\n you are still invited .\n\n Thank you\n\n');
}
guest.splice(0, 2);
console.log(guest);
