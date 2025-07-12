const name ="aj"
const repoCount =50
//console.log(name + repoCount+ " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//declaring one more way
const gameName= new String('anish-fc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);//negative values bhi use kar sakte licing mei but substring mei nahi use kar sakte

const newStingOne="  anish   "
console.log(newStingOne);
console.log(newStingOne.trim());///spaces nikaal deta

const url="https://an.com/anish"

console.log(url.replace('anish', 'jais'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));







