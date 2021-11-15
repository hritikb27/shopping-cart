import React from "react";
import { Link } from "react-router-dom";
import { CatRobotsData, RobotKits } from "../data/productData";

function ShoppingPage() {
  return (
    <div className="shoppingpage productImages">
      <Link to="/cat-toys">
        <img src={CatRobotsData[0].url} alt={CatRobotsData[0].name} />
        <h1>Cat Robot Toys</h1>
      </Link>

      <Link to="/robot-kits">
        <img src={RobotKits[0].url} alt={RobotKits[0].name} />
        <h1>Robot Kits</h1>
      </Link>
    </div>
  );
}

export default ShoppingPage;
