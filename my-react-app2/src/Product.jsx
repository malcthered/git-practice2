function Product({title, price}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
        </div>
    );
}

function HelloWorld() {
    return (
        <div>  
            <h1>Hello World</h1>
        </div>
    );
}

//export default HelloWorld;
export default Product;