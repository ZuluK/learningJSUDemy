// //learning JS with Udemy
//
// //alert Box
// alert('hello world');
//
// //Variables
// var message;
// //'REPL'
// //R-read E-eval P-print L-loop
// //var types
// var x;//undefined (represents abscence of any value)
// //x has no value
// var y = null;//undefined
// //does not point to a valid object
// //if you type in 'typeof y' in console. it will return "object"
// var z = 5;
// //Javascript is a scripting language
//
//
// //the boolean data type
// var x = false;
// //function to check if falsy or not
// function checkFalsy (z){
//   if (z){
//     console.log('Truthy value passed');
//   } else {
//     console.log('Falsy value passed');
//   }



//creating user stores

//as a app user i want tot be able to upload my pictures

//1. Button with value of "UPload picture"
//2.Input with placeholder 'Enter URL input'
//3.Click Button
  //1.Picture displays under input
  //2.Input is then cleared



function display(){
  var userInput = document.getElementById('userPic').value;
  var img = document.createElement('img');
  img.src = userInput;
  document.getElementById('Pic').appendChild(img);
  documemt.getElementById('userInput').value = '';
  var picObj = {};
  picObj.url = userInput;

}



//function expression
var mayBeCall = function maybe(){
  console.log('maybe');
}
//function declaration
//A term a called 'hoisting'
function callMe(){
  console.log('call me');
}


//Javascript 'closer' examples
//function within a function

//outer function
function showName (firstName, lastName) { 
​var nameIntro = "Your name is ";
// this inner function has access to the outer function's variables
​function makeFullName () { 
​return nameIntro + firstName + " " + lastName; 
}
​
​return makeFullName (); 
} 
​
showName ("Michael", "Jackson"); // Your name is Michael Jackson 

//Closer examples
//outer function as access to inner function
function myClozure(){
  var cat = 'henry';

  //inner function doesn't have access to outer function
  function innerClosure(){
    cat = 'billy';
    var dog = 'sam';
  };

  innerClosure();
  console.log(cat);
  console.log(dog);

};


//Examples of Parse and Stringify
function setStorage(){
  localStorage.setItem('myObj', JSON.stringify({name: 'brian', job: 'hack'}));

  setTimeout(function(){
    getStorage();
  },3000);
};

function getStorage(){
  console.log(JSON.parse(localStorage.getItem('myObj')));
};
