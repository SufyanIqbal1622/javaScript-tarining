"use strict";

// let message; //declare a variable
// message='Hello';// define a variable
// alert(message);

// let user= 'John', age=25 , message = 'Hello'; //on One line decleration and defination
// alert(user + " " + age +" " + message );

// let name='Sufyan';
// let admin= name;
// alert(admin);

//************************Data types******************************
// let n = 123;
//     n = 123.21;
// let name='Sufyan';

// alert(n);
// alert( `hello ${1}` );

  //  alert , prompt , confirm intro

  // alert("Hello");

// let age = prompt( ' How old are you ' , 100);
// alert(`You are ${age} years old!`);

// let isBoss= confirm("Are you the boss?");
// alert(isBoss);

//*******************Type Convesion*******************
// let value=true;
// alert(typeof value);// boolean
// value= String(value);
// alert(typeof value);

// numric conversion

// alert('6'/'2'); //ans=3 strings are conerted to number

// let str ="123";
// alert(typof str);// String
// let num= Number(str);//become a Number
// alert(typeof num);

// Basic operators , Math

//alert(2**2); // 4 exponential
//
// alert( 9** (1/2));
// alert( 8 ** (1/3));

// let s = "my "+ "string";
// alert(s); // my string

// alert(6 + '4');// 64
// alert( 6 - '4');//2

//************************Conditional Section **************///

// let a = +prompt("What is Value in your mind",);
//
//
// switch(a){
//   case 3:
//     alert("Too small");
//     break;
//   case 4:
//       alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
//
// }

//***************Function*******************

// function showMessage(){
//   alert('Hello everyone!');
// }
// showMessage();

// function with local variable

// function showMessage(){
//   let message= "Hello, I'm JavaScript";//local variable
//   alert(message);
// }
// showMessage();

 // function with global variable

 // let userName = 'Sufyan';
 // function showMessage(){
 //   let message = 'Hello ' + userName;
 //   alert(message);
 // }
 // showMessage();

 // function with local variable and global variable diffrance

 // let userName ='Sufyan';
 // function showMessage(){
 //   let userName="Bob";// declarelocal variable
 //   let message= 'Hello, '+ userName;//Bob
 //   alert(message);
 // }
 // showMessage();// Hello, Bob
 // alert(userName);// Sufyan

// perameterized function

// function showMessage(from, text){
//   // if ( text === undefined){
//   //   text = "empty message";
//   // }
//   text= text||'empty'// alternativ of if condition
//   from= '* ' + from + ' *';
//   alert(from + ' : ' + text)
// }
// showMessage('Sufyan');
// showMessage('Sufyan', "What's up?");

// if there's no "count" parameter, show "unknown"

// function showCount(count) {
//   alert(count ?? "unknown");
// }
//
// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown

/// age confermation with function

// //let checkAge=
//   function checkAge(age){
//      if(age>= 18){
//        return true;
//      }else{
//        return confirm('Do you have permission from your parents?');
//      }
//    }
//  let age=prompt('How old are you', 18);
//  if ( checkAge(age) ){
//    alert('Access Garnted');
//  }else{
//    alert('Access Denied');
//  }
//
//   alert(checkAge);
// function Express

//Arow function
//
//let age = prompt("What is your age",'18');
// let welcome= (age <18)?() => alert('Hollo'):()=>alert("Greetings!");
// welcome();

// let sum = (a,b)=> {
//   let result = a + b;
//   return result;
// };
// alert(sum(1,2));//3

// let userName = prompt ("Your name?" , "Sufyan") ;
// let isTeaWanted = confirm("Do you want some tea?");
//
// alert("Visitor: " + userName);
// alert("Tea wanted: " + isTeaWanted);

// function hello(name) {
//   let phrase = `Hello, ${name}!`;
//
//   debugger;  // <-- the debugger stops here
//
//   say(phrase);
// }
// hello(Sufyan);

//******************Testing *****************

// Power function


// function pow(x, n) {
//   if (n < 0) return NaN;
//  if (Math.round(n) != n) return NaN;
//
//   let result = 1;
//
// for (let i = 0; i < n; i++) {
//   result *= x;
// }
//
// return result;
// }
//
// //add function
//
// function add(a,b){
//   return a+b;
// }
//
//   ///run tests!
//   mocha.run();
////**************************Objects***************//
// let user={
//   name:"Sufyan",
//   age:30,
//   "like birds": true
// };
// alert(user.name + user.age +user["like birds"] );

// let user={};
// //set property(value) {
// user["like birds"]=true;
// // get
// alert(user["like birds"]);

// let user={
//   name:"Sufyan",
//   age:23,
// };
// let key=prompt("What do you want know about user ?", 'name');
// alert(user[key]);

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']:5
// };
// alert( bag.apple ); // 5 if fruit="apple"

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }
//
// let user = makeUser("John", 30);
// alert(user.name); // John

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };
//
// for (let key in user) {
//   // keys
//   alert( key );  // name, age, isAdmin
//   // values for the keys
//   alert( user[key] ); // John, 30, true
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA"
// };
//
// for (let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }
// let students={
//   name:"Sufyan",
//   fatherName:"Muhammad Iqbal",
//   age: 23,
//   profession:"Software development",
// }
// delete students.age;
//
// for (let stu in students){
//   alert(stu + " : " + students[stu] );
// }

// let user= {
//   name:"Sufyan",
//   surname:"smith",
//
// }
// alert(user.name);
// user.name="pete";
// alert(user.name);
// delete user.name;
// alert(user.name);

///chalange
// let salaries={
//   Sufyan:100,
//   Ann: 160,
//   Pete: 130
// }
// function isEmpty(){
//   for(let sal in salaries){
//     return false;
//   }
//       return true;
//   }
//
// function sum(){
//   let sumSal=0;
//   for (let sal in salaries){
//     sumSal += salaries[sal];
//   }
//   return sumSal;
// }
// if(!isEmpty()){
//   alert(sum());
// }else {
//   alert("There is no Data available in Object");
// }

// let menu={
//   width:200,
//   height:300,
//   tital:"My menu",
// };
// for (let mn in menu){
//   alert(mn + menu[mn]);
// }
// function multiplyNumaric(obj){
//   for (let key in obj){
//     if(typeof obj[key]=='number'){
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumaric(menu);
// for (let mn in menu){
//   alert(mn + menu[mn]);
// }
//// *************Object Refcence*********
// let user= {
//   name:"John",
//   age: 23,
// };
//let clone={};//empty new object
//let's copy all user properties into it

// for (let key in user){
// clone[key] = user[key];
// }

// We also can use Object.assign to replace for..in loop for simple cloning
// let clone = Object.assign({},user);
//
// clone.name="Sufyan";
// clone.age=24;
// for( let us in user){
//    document.write( "<br>" + us + " : "+ user[us])
// }
//
// for( let cl in clone){
//
//   document.write( " <br> " + cl + " : "+ clone[cl])
// }

////***Nested cloning****

 // let user = {
 //   name:"Sufyan",
 //   sizes:{
 //     height:182,
 //     with:  50,
 //   }
 // };
 //
 // let clone = Object.assign({},user);
 // alert(user.sizes===clone.sizes);

 ////**********************Object Methods*************

//  let user = {
//    name:"Sufyan",
//    age:30
//  };
//  // user.sayHi= function(){
//  //   alert("Hello!");
//  // }
//
//  ////OR Use A pre declare function
//
// // function sayHi(){
// //   alert("Hello!");
// // }
// //user.sayHi=sayHi;
//
// //// or another way shorthanded
// user={
//   sayHi(){
//     alert("Hello!");
//   }
// };
//
// user.sayHi();

////****Calculater by using this keyword

// let calculater = {
//   sum(){
//     return this.a + this.b;
//   },
//   mult(){
//     return this.a * this.b;
//   },
//   sub(){
//     return this.a -this.b;
//   },
//   dvid(){
//     if(this.a==0){
//       return "pls enter correct value";
//     }else{
//       return this.a / this.b;
//     }
//   },
//   read(){
//     this.a = +prompt('a?',0);
//     this.b = + prompt('b?',0);
//   },
// };
// calculater.read();
// alert(calculater.sum());
// alert(calculater.mult());
// alert(calculater.sub());
// alert(calculater.dvid());

// let ladder = {
//   step:0,
//   up(){
//     this.step++;
//     return this;
//   },
//   down(){
//     this.step--;
//     return this;
//   },
//   showStep:function(){
//     alert(this.step );
//     return this;
//   }
// };
//
// ladder.up().up().up().down().up().down().showStep();
//
// function User(name){
//   this.name=name;
//   this.sayHi =function(){
//     alert("My name is : "+ this.name);
//   };
// }
// let Sufyan= new User("Sufyan");
// Sufyan.sayHi();
// let Iqbal = new User("Iqbal");
// Iqbal.sayHi();
// Sufyan.sayHi();

////**** new Calculater

// function Calculater(){
//   this.read =function(){
//     this.a = +prompt('a?',0);
//     this.b = +prompt('b?',0);
//   };
//   this.sum= function(){
//     return this.a + this.b;
//   };
//   this.mul=function(){
//     return this.a * this.b;
//   };
// }
// let calculater = new Calculater();
// calculater.read();
// alert(" Now Enter Valuer Agin For Second Calculation");
// let calculater1 = new Calculater();
// calculater1.read();
//
// alert( "Sum = "+ calculater.sum());
// alert(" Mul = "+ calculater.mul());
// alert( "Sum = "+ calculater1.sum());
// alert(" Mul = "+ calculater1.mul());

// function Accumulator(startingValue){
//   this.value = startingValue;
//   this.read = function(){
//     this.value += +prompt("How much to add",0);
//   };
// }
// let  accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created
//
// // read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");
//
// // the same symbol
// alert( idAgain===id ); // true


// let user = {
//   name: "Sufyan",
//   mony:1000,
//   [Symbol.toPrimitive](hint){
//     alert(`hint : ${hint}`);
//     return hint == "string" ? `name : "${this.name}"`:this.mony;
//   }
// };
// //alert(user); // hint string Sufyan
// //alert(+user);//hint number 1000
// alert(user +500); //hint default 1500

// let user = {name : "Sufyan"};
// alert(user);// [object Object]
// alert( user.valueOf()===user);//true

 // let user ={
 //   name:"Sufyan",
 //   mony : 1000,
 //   toString(){
 //     return `{name: " ${this.name}"}`;
 //   },
 //   valueOf(){
 //     return this.mony;
 //   },
 // };
 //
 // alert(user);
 // alert(+user);
 // alert(user + 500);

 //
 // let str = "Hello";
 //
 // str.test = 5; // (*)
 //
 // alert(str.test)

 //// ************* String Methods************

// let str = 'As sly as a fox, as strong as an fox';
//
// let target = 'as'; //let's look for it
// let pos = 0;
//
// while (true) {
//   let foundPos = str.indexOf(target,pos);
//   if(foundPos == -1) break;
//    alert( `Found at ${foundPos}` );
//    pos = foundPos + 1;
// }

////Anoher way to code
//
// let str = 'As sly as a fox, as strong as an fox';
//
// let target = 'as'; //let's look for it
// let pos = -1;
// while((pos = str.indexOf(target,pos+1))!= -1){
//   alert(pos);
// }

///************Array Methods******

// let str ="stringify";
// alert(str.slice(-0,-1));
// let arr = [ "I", "study","JavaScript"];
// arr.splice(1,1);//From index 1 remove 1 element
// alert( arr );

// let arr = [ "I","study","JavaScript","right","now"];
// arr.splice(0,3,"Let's","dance","right","now");
//
// alert(arr);
// alert(arr.slice(2,4));
// let arr = [1,2];
// // creat an array form:arr and [3,4]
// alert(arr.concat([3,4]));//1
//
// alert(arr.concat([3,4],5,6));
// let arr = [1,2];
// let arrayLike= {
//   0:"somthing",
//   1:"else",
//   [Symbol.isConcatSpreadable]:true,
//   length:2,
//
// }
// alert(arr.concat(arrayLike));
// ["Bilbo","Gandalf","Nazgul"].forEach((item, indux,array) => {
//   alert(`${item} is at indux ${indux} in ${array}`);
// });

let users = [
  {id: 1, name: "Muhammad"},
  {id: 2, name: "Sufyan"},
  {id: 3, name: "Iqbal"}

];
// let user = users.find(item=> item.name =='Sufyan');
// alert(user.id + " "+ user.name);
// let someUsers = users.filter((item) => item.id < 3 );
// alert(someUsers.length)

// let results = ["Bilbo","Gandalf","Nazgul"].map((item) => item.length);
// alert(results);
// let result = users.map(item => item );
// result.forEach((item) => {
//    alert(`${item.id} is at indux ${item.name} `);
// });

// let rObj = {};
// rObj[obj.key]= obj.values;
// return rObj;
// });


// let numbers = [10,10,10]
// let filteredNumbers = numbers.map(function(num, index) {
//   if (index < numbers.length) {
//      return num
//   }
// })
//
// console.log( filteredNumbers)
// ['1', '2', '3'].map( str => parseInt(str) );
// let arr = [1,2,3,4,5];
// let result = arr.reduce((sum, current) => sum + current);
// alert(result);
// function compairNumaric(a,b){
//   if(a>b) return 1;
//   if(a==b) return 0;
//   if (a<b)return -1;
// }
// let arr = [1,22,13,34,5];
//  arr.sort(compairNumaric);
// console.log(arr);
// //or use the second method
//
// arr.sort(function(a, b) { return a - b; });
// console.log(arr);
// let john = { name: "John" };
// let ben = { name: "Ben" };
//
// let visitsCountObj = {}; // try to use an object
//
// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced
//
// // That's what got written!
// alert( visitsCountObj["[object Object]" ); // 123
/////
// let recipeMap = new Map([
//   ['cucumber', 500],
//   ['tommato',350],
//   ['onion',50],
// ]);
// for(let veg of recipeMap.keys()){
// alert(veg);
// }
// for(let amount of recipeMap.values()){
// alert(amount);
// }
// for (let entry of recipeMap){
// alert(entry);
// }
// runs the function for each (key, value) pair
// recipeMap.forEach( (value, key, map) => {
//   alert(`${key}: ${value}`); // cucumber: 500 etc
// });

// array of [key, value] pairs
// let map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);
//
// alert( map.get('1') ); // str1

// let obj = {
//   name: "John",
//   age: 30
// };
//
// let map = new Map(Object.entries(obj));
//
// alert( map.get('name') ); // John
// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);
//
// // now prices = { banana: 1, orange: 2, meat: 4 }
//
// alert(prices.banana); // 2

// let set = new Set(["oranges", "apples", "bananas"]);
//
// //for (let value of set) alert(value);
//
// // the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });

let date = new Date();

// the hour in your current time zone
alert( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
alert( date.getUTCHours() );
