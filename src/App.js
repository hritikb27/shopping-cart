import React, { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingPage from "./components/ShoppingPage";
import CatRobots from "./data/CatRobots";
import RobotKitsPage from "./data/RobotKits";
import './index.scss'
import { Cart } from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState({});

  function addToCartContext(item, event) {
    event.disabled=true;
    event.innerText = 'Added'
    event.classList.add('no-hover')
    setCartItems(prevState => {
      changeItemQuantity(item.name, 1)
      return [...prevState, item]
    })
  }

  function changeItemQuantity(name, amount) {
    setItemQuantity(prevState=>{
      return {...prevState,[name]:amount}
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav amount={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/cat-toys" element={<CatRobots func={addToCartContext} />} />
          <Route path="/robot-kits" element={<RobotKitsPage func={addToCartContext} />} />
          <Route path="/cart" element={<Cart items={cartItems} quantity={itemQuantity} changeQuantity={changeItemQuantity} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
