import React,{useState} from "react";
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

  function addToCartContext(item){
    setCartItems(prevState=>{
      return [...prevState, item]
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
          <Nav amount={cartItems.length} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShoppingPage />} />
            <Route path="/cat-toys" element={<CatRobots func={addToCartContext} />} />
            <Route path="/robot-kits" element={<RobotKitsPage func={addToCartContext} />} />
            <Route path="/cart" element={<Cart items={cartItems}/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
