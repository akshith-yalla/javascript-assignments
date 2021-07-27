import * as util from './util.js';

// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

util.myfunc(util.myInterests,['badminton','cricket'])

// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. 
// Write this function.Submit the github link to the code

console.log(util.initials('Akshith', 'Yalla'));
