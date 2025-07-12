//Dates

let myDate= new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate) //object

//let myCreatedDate= new Date(2023,0,23)
let myCreatedDate1 =new Date("2023-01-14")//isme direct start hojata 1 se
console.log(myCreatedDate1.toLocaleString());
//months 0 se start hore yah dekh

let myTimeStamp =Date.now()
console.log(myTimeStamp)//milli second value
console.log(myCreatedDate1.getTime());
//yeh bhi milli secong mei aata

console.log(Math.floor(Date.now()/1000));//convert it into seconds

let newDates= new Date()
console.log(newDates);
console.log(newDates.getMonth()+1);
console.log(newDates.getDay());

newDates.toLocaleString('default',{
    weekday:"long",

})
