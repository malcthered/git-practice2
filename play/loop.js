const fruit = ['apples', 'oranges', 'pears'];
const myContent = document.getElementById('main-content');

const fruitList = document.createElement('ul');

fruit.forEach((fruit) => {

    const fruitItem = document.createElement('li');
    fruitItem.innerText = fruit;
    fruitList.append(fruitItem);
})

myContent.append(fruitList);
