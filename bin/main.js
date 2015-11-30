'use strict';

console.log("Starting collector");

let MessageParser = require('./message_parser.js');
let CombatParser = require('./combat_parser.js');


console.log("Importing modules [done]");


let ML = new MessageParser();

ML.onmessage("aaah, oky!");



let cp = new CombatParser();

let receivers = [ML, cp];
cp.onmessage("aah, this is convenient!");

for(let x of receivers){
  x.onmessage("message");
}


console.log(`Number of processed messages: ${cp.number_messages}`);