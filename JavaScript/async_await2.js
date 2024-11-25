const API_url="https://api.github.com/users/Muskan08-bit"

async function handlePromise() {
    try { //try catch block, error handling
        const data = await fetch(API_url) // fetch gives a promise, handlePromise function will suspend at this line and function execution
        //will resume only after fetch has been successfully fulfilled and fetch returns a response
        const jsonValue = await data.json() // will return a promise again here, conversting response body into json]
        console.log(jsonValue)   
    }
    catch(error) {
        console.log(error)
    }
}
handlePromise()