function myInterests(interest1, interest2){
    return console.log('I like to play ' +interest1+ ' and '+ interest2);
}

function myfunc(callback, args){
    myInterests.apply(this,args);

}

var initials = (firstName, lastName) => {
    return firstName[0]+lastName[0];
}


export{ myInterests, myfunc, initials}
