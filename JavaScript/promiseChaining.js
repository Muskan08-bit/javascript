//callback hell
const cart = ['shoes', 'pants', 'kurtas']

//inversion of control
createOrder(cart , function (orderId) {
    proceedToPayment(orderId, function(data) {
        showOrdersummary(data, function() {
            updatewalletinfo()
        })
    })
})

//solution of callback hell is promise chaining
/*const promise = createOrder(cart) 
promise.then(function (orderId) {
    proceedToPayment(orderId)
})*/

//same as (promise chaining)
createOrder(cart).then(function(orderDetails) {
    return proceedToPayment(orderDetails).then(function(paymentInfo) {
        return showOrdersummary(paymentInfo).then(function(){
            return updatewalletinfo()
        })
    })
})
//always returns a promise from a promise in promise chaining and can also use the arrow function