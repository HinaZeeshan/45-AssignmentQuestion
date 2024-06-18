"use strict";
// 15-Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. 
//  You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list
let guest = ['tooba', 'ayan', 'arbab'];
for (let i = 0; i < guest.length; i++) {
    console.log('Dear' + guest[i] + ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n');
}
let canNot = 'tooba';
// console.log(canNot +" "+ 'cannot come to join us');
let newGuest = "misha";
// guest[guest.indexOf(canNot)]= newGuest
// console.log(guest);
guest[0] = newGuest;
for (let i = 0; i < guest.length; i++) {
    console.log('Dear' + guest[i] + ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n');
}
console.log(canNot + " " + 'cannot come to join us');
