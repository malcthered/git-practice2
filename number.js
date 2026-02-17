const inputNumber = document.getElementById("input_numbert");
const result = document.getElementById('result');
const button = document.getElementById('button');
const error = document.getElementById('error');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

button.addEventListener('click', async () =>{
    const number = parseInt(inputNumber.value);
    if(isNaN(number) || number < 1 || number > 10) {
        error.innerText='Invalid entry. Input must be a number between 1 and 10';
        return;
    } else {
        result.innerText = number;
    }

    await sleep(10000);

    error.innerText = '';
      
})