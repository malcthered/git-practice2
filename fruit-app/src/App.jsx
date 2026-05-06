import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FruitList from './FruitList';

function App() {

  return (
    <div id="main-content">
        <h1>My Fruit List!!</h1>
        <FruitList />
    </div>
  )
}

export default App;
