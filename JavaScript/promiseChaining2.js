const cart = ['shoes', 'pants', 'kurtas']

createOrder(cart)
.then(function (orderId) {
    console.log(orderId)
    return orderId
})
.catch( function(err) {            //this catch block only have responsibility to catch errors of promise chain
    console.log(err)               //persent on top this catch block
})

.then(function (orderId) {
    return proceedToPayment(orderId)     //by attaching function into next 'then' will prevent from promise hell
})
/*
    .then(function (orderId) {
    return proceedToPayment(orderId).then(function (paymentInfo) {    //promise hell
        console.log(paymentinfo)
    })
})
*/
.then(function (paymentInfo) {            //good practice
    console.log(paymentInfo)
})
.catch( function(err) {            //always write the catch block to handle the errors
    console.log(err)
})
.then(function () {
    console.log('No matter what happens, I will definitly be called')
})

//creating a promise

function createOrder(cart) {
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

function proceedToPayment(orderId) {
    return new Promise( function(resolve, reject) {
        if(orderId)
        resolve('Payment successful')
        reject('Order Id not defined')
    })
}
function validateCart(cart) {
    return true;
}