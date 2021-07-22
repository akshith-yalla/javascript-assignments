// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function myInterests(interest1, interest2){
    console.log('I like to play ' +interest1+ ' and '+ interest2);

}

function myfunc(callback, args){
    myInterests.apply(this,args);

}

myfunc(myInterests,['badminton','cricket'])

// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. 
// Write this function.Submit the github link to the code

var initials = (firstName, lastName) => {
    return console.log(firstName[0]+lastName[0]);
};

initials('Akshith', 'Yalla')
