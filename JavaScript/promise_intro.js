const cart = ['shoes', 'pants', 'kurtas']

//inversion of control
createOrder(cart , function (orderId) {
    proceedToPayment
    (orderId)
})



//solution to inversion of control is promise

const promise = createOrder(cart)   //her createOrder api''s jib is only to get response of orderDetails
// promise is an object with a data key and it holds response return by createOrder api which is async in nature
//promise such as { data : undefined} before createOrder api respnse is returned


//lines of code is running

//the function available over promise obejct and attach the callback function using 'then' function
//promise such as { data: orderDetails } after createOrder api response is returned. Once the values are filled in 
//promise object then the callback fucntion present inside the .then function will be automatically executed
promise.then(function (orderId) {
    proceedToPayment(orderId)
})

//In first approach, we are passing the callback function to another function and in second approach, we are 
//attaching a callback function to a promise object so, whenever promise object will have values then 
//automatically callback function will get executed that is control is in our hands.