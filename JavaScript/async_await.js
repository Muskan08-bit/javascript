const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved successfully')
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved successfully')
    }, 10000)
})

async function handlePromise() {
    console.log('Hello')
    const val = await p1
    console.log('Hi after 5 secs')
    console.log(val)
    const val2 = await p2
    console.log('Hi2 after 10 secs')
    console.log(val2)
}
handlePromise()
console.log('Hey there')
setTimeout(() => {
    console.log('After 5 secs')
}, 5000)