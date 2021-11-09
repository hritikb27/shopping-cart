import React from "react";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingPage from "./components/ShoppingPage";
import './index.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
