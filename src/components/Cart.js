import React, { useState, createContext } from "react";

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(){
        console.log()
    }

    return(
        <div>
            <h3>Items in the Cart</h3>
        </div>
    )
}

export default Cart