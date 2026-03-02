// This code demonstrates blocking and non-blocking behavior in JavaScript.

console.log('Start');
function block3Seconds() {  // This function blocks the main thread for 3 seconds
    const statr = Date.now();
    while   (Date.now() - statr < 3000) {}
}

block3Seconds();
console.log('End'); 

console.log('Start');
setTimeout(() => {      // This function is non-blocking and will execute after 3 seconds
    console.log('Inside setTimeout');
}, 3000);
console.log('End');

console.log('Start');
new Promise((resolve) => {  // This promise will resolve after 3 seconds, but it does not block the main thread
    setTimeout(() => {
        resolve('Promise resolved'); // This will log after 3 seconds, but it does not block the main thread
    }, 3000)
});

console.log('End');