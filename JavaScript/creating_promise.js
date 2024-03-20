const cart = ['shoes', 'pants', 'kurtas']

const promise = createOrder(cart)
console.log(promise)
promise.then(function (orderId) {
    proceedToPayment(orderId)
    console.log(orderId)
})
.catch( function(err) {            //always write the catch block to handle the errors
    console.log(err)
})


//creating a promise

function createOrder() {
    //promise constructor which takes a function which has resolve and reject and these are them functions 
    //given by Javascript to build a promise
    const pr = new Promise( function(resolve, reject) {
        //createcard
        //validateCard
        if(!validateCart(cart)) {
            const error = new Error("Card is not valid")
            reject(error)                  //rejecting a promise
        }
        const orderId = '1234'
        if(orderId){
            setTimeout( function () {
                resolve(orderId)
            }, 5000)
            // resolve(orderId)               //resolve a promise
        }
    })
    return pr
}

function validateCart(cart) {
    return false;
}