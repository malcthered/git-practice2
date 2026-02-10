const num1 = document.getElementById("num1");
const button = document.getElementById('button');
const output = document.getElementById('output');
const error = document.getElementById('error');

button.addEventListener('click', () => {
    if(num1.value < 1 || num1.value > 10) {
        error.innerText='Number must be between 1 and 10';
        setTimeout(() => {
            error.innerText='';
            num1.value = '';
        }, 5000);
        return;
    }
    output.innerText = 'The value input is: ' + num1.value;
        setTimeout(() => {
            output.innerText='';
            num1.value = '';
        }, 5000);
})