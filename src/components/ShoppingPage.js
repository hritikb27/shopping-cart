import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {CatRobotsData, RobotKits} from "../data/productData";

function ShoppingPage() {

    return (
        <div className='shoppingpage productImages'>
                <Link to="/cat-toys">
                    <img src={CatRobotsData[0].url} />
                    <h1>Cat Robot Toys</h1>
                </Link>

                <Link to="/robot-kits">
                    <img src={RobotKits[0].url} />
                    <h1>Robot Kits</h1>
                </Link>
                <div className='shoppingCart'>
                    
                </div>
        </div>
    )
}

export default ShoppingPage