//use of prompt

//const prompt=require("prompt-sync")({sigint:true}); 
/*let a = prompt("Whats your age? ")
console.log(typeof a)
a=Number.parseInt(a) //to convert string into number
console.log(typeof a)
*/
let a = 67
if(a<0){
    console.log("This is a invalid age")
}
else if(a>=0 && a<18)
{
    console.log("You are kid.")
}
else
{
    console.log("You can drive now.")
}
console.log("You can" ,a<18?"not drive":"drive")