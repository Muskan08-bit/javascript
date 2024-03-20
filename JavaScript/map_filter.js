//Map, filter and reduce are higher order function in the javascript.
//Map function is used to transform the array (transform each and every value and get a new value out of it).
const array = [5, 1,3, 2 ,6]
// function double(x) {
// 	return 2*x
// 	}
// const output = array.map(double)     //higher order functions


//same as
const output = array.map((x) => 2*x)  
const binary = array.map((x) => x.toString(2))       
console.log(output)
console.log(binary)

//Filter function is used to filter the values inside an array 
const filter_output = array.filter((x) => x>4)
console.log(filter_output)