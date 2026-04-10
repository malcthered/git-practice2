// impoqrt { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Product from './Product';

function App() {
    const item = { title: "Gaming Laptop", price: 2299 };

    return (
      <div style={{ padding: "4rem" }}>
          <h1>My Products</h1>
          <Product title={item.title} price={item.price} /> // This is the call to the Product component, passing the title and price as props  
      </div>
  );

}

export default App;
