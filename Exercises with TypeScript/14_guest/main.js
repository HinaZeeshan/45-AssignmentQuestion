"use strict";
// 14-Guest List: If you could invite anyone,
//  living or deceased, to dinner, who would you invite? 
//  Make a list that includes at least three people you’d like to invite to dinner. 
//  Then use your list to print a message to each person, 
// inviting them to dinner.
let guest = ['tooba', 'ayan', 'arbab'];
// guest.map((item)=>(
// console.log(`dear ${item}, would you like to join me on dinner`)
// ))  
for (let i = 0; i < guest.length; i++) {
    console.log('Dear' + guest[i] + ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n');
}
