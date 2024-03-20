//1
console.log("Create a variable of type string and try to add a number to it")
let a="Muskan"
let b=23
console.log(a + b)

//2
console.log("Use typeof operator to find the datatype of the string in last program")
console.log(typeof(a+b))

//3
console.log("Create a constant obj in js and change it to hold number later")
const obj={
    x: "Muskan"
}

//obj= 123//will give error

//4
obj['friend']="Sam" //we can change inside values of obj's keys and even add more values to it. 
console.log(obj)
//we cannot make other object with reference obj

//5
const dict = {
    appreciate: "recognize the full worth of",
    yakka: "hard work"

}
console.log(dict.yakka) //console.log(dict]yakka)