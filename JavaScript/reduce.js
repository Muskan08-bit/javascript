//Reduce function does not reduce anything . This is reduced where you have to take all elements of an array 
//and come up with a single value out of them.

//sum of an array
const array = [5, 1,3, 2 ,6]
const output = array.reduce( function(acc, curr) {     //curr = current, is iterating over each element of an array
	acc = acc + curr;    //acc= accumulator which is equal to sum variable
	return acc; 
	}, 0)                    //intially setting acc's value as 0
console.log(output)

//max of an array
//basic function for max element
function max(arr) {
    let max = 0;
    for (let i=0; i<arr.length; i++) {
        if(max<arr[i])
        max = arr[i]
    }
    return max;
}
console.log(max(array))

//using reduce function
const maxoutput = array.reduce(function(max, curr) {
    if(max<curr) {
        max = curr
    }
    return max
}, 0)
console.log(maxoutput)