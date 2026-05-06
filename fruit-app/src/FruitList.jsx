function FruitList() {
    const fruits = ['apples', 'oranges', 'pears','kiwi'];

    fruits.sort();
  
    const fruitItems = fruits.map(
        fruit=> <li>{fruit}</li>
    )

    return (<ul>{fruitItems}</ul>);

}

export default FruitList;




