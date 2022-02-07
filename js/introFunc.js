//Annonymous Function declaration
let f =(function(){


});

f();

//parameters

function add(a,b){
   return a+b;

}

(a,b)=>{
    console.log(a+b);
 
 }



function add(){
 
}

add();
let x =add(3,5);

//Arrow function
setTimeout(()=>console.log("hello"),1000);



/*
Create a new codepen
Write a function that accepts a number as an argument
Alert the user whether the given number is even or odd
Call your function
*/



function number(c){
    if(c%2==0)
    alert('even')
    else 
    alert('odd');
}
number(2);


/*
Write a function that accepts a password (string)
Validate the password using the following rules:
Must be 6-20 characters long
Must start with a letter
Alert the user if their password has been accepted or why their password was rejected

*/

/*function password(a){
    //let b=/^[A-Za-z]\w{6,20}$/;
    if(a.macth(/^[A-Za-z]\w{6,20}$/))
        alert("password accepted");
    else 
    alert("incorrect password");

}*/

function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});


//Example 2

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promisee = job(true);

promisee

.then(function(data) {
    console.log(data);

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
});







