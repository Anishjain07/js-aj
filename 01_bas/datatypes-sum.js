//primitive 
//7 -Strings, boolean, number, null, undefined, symbol, Bigint
 
const score = 100
const scoreValue=100.3

const isLog= false
const outsidetemp =null
let Usermail;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id ==anotherId);

//const bigNum=35365464664545465n

//false
//Reference type or non primitive
//ARRAY,OBJECTS,FUNCTIONS
const heros= ["shark","nav","dog"]
let myObj={
    name:"aj",//objects
    age:22,
}

//Func
//function()
const myFuction= function(){
    console.log("aj");
}

//console.log (typeof  );

///stack (primitive), Heap (nonprimi)

let myYoutube= "anjsn"
let another= myYoutube
another= "ajhfg"
console.log(another);

let user={
    email: "sjejhf@gmail.com"
};