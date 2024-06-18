// More Guests: You just found a bigger dinner table, 
// so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
//   • Print a new set of invitation messages, one for each person in your list.



let guest : string []= ['tooba','ayan','arbab'];

 
for (let i=0; i<guest.length; i++ ){

    console.log('Dear'+ guest[i]+  ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n')

}


let canNot :string = 'tooba';


let newGuest : string ="misha";
;
 guest[0] = newGuest;

 for (let i=0; i<guest.length; i++ ){

    console.log('Dear'+ guest[i]+  ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n')

}
console.log(canNot +" "+ 'cannot come to join us');






console.log('good news! we found a bigger dinner table,we Think of three more guests to invite to dinner');

// add one person 
guest.unshift('ashar')
guest.splice(2,0,'miss Aiza')
guest.push('hassan')


for (let i=0; i<guest.length; i++ ){

    console.log('Dear'+ guest[i]+  ', \n\n it is pleasure to us you join our party.\n\n Thank you\n\n')

}
