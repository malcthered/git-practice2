// impoqrt { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Product from './Product';

function App() {
    const item = { title: "Gaming Laptop", price: 1299 };

    return (
      <div style={{ padding: "2rem" }}>
          <h1>My Products</h1>
          <Product title={item.title} price={item.price} />
      </div>
  );

}

export default App;
