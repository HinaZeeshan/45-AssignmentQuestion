"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personalname = '';
personalname = prompt('what is your name?') || '';
if (personalname !== 'null' && personalname !== '') {
    alert('hello $(personalname), would you like to learn some python today?');
}
else {
    alert('you have to write something');
}
