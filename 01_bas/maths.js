const score= 400
console.log(score);


const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));//precision value ke liye

const otherNume =23.8966
console.log(otherNume.toPrecision(3));//23.9

const hundreds= 100000
console.log(hundreds.toLocaleString('en-IN'));//comma sperated indian number aata
//max value //min value bhi milta

/////**********mathss *******/

console.log(Math);//Object aata
console.log(Math.abs(-4));//positive vale aata
console.log(Math.round(4.3));//4 aata
console.log(Math.ceil(4.2));//5 aata
console.log(Math.floor(4.9));//4 aata
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); //0 aur 1 kee beech mei hi aati values
console.log(Math.random()*10+1); //0 avoid karne ko value 0* kuch bhi 0 ho sakta hai isliye
console.log(Math.floor(Math.random()*10+1)); //round of karta


const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min +1)+min))





