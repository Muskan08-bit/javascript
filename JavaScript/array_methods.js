let num=[1,2,3,34,5]
let b= num.toString() //b is now a string 
console.log(b)
let c = num.join("_")
console.log(c,typeof c)
 //let r= num.pop()
 //console.log(num, r)
 let r=num.push(57)
 console.log(num)
 let m =num.shift()
 console.log(num)
 delete num[0]
 console.log(num)
 console.log(num.length)
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2 = [11,12,13,14,15,16,17,18,19]
let new_array = num1.concat(num2)
console.log(new_array)

num.sort()
console.log(num)
let compare = (a,b)=> {
    return a-b         //for descending order b-a
}
num.sort(compare)
console.log(num) 
//num.reverse()
//console.log(num) //this will reverse an array
let deleted_values =num.splice(2,3,1021,1022,1023)
console.log(deleted_values)
console.log(num)
let p = num.slice(2)
console.log(p)