let randnum_para = document.querySelector('#main-section #random-number');

randnum_para.innerText = genRandomInt(100);

function genRandomInt(max)  {
    return Math.floor(Math.random() * max);
}
