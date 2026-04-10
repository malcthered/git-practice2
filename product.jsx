function Product({title, price}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
        </div>
    );
}

export default  Product App() {
    const sample = { title: "Laptop", price: 899 };

    return (
        <div>
            <h2>Products</h2>
            <Product title={sample.title} price={sample.price} />
        </div>
    );
}
