console.log('A');
setTimeout(()=> console.log('B'),3000);
Promise.resolve().then(() => console.log('C'))
console.log('D');