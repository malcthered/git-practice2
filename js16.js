const fruits = ["apple", "banana", "cherry"];

let x= '';

myFavorite: {
    x = fruits[0];   // 
    break myFavorite; // This will exit the block immediately after assigning "apple" to x
    x = fruits[1];   //
    x = fruits[2];
}

console.log(x);