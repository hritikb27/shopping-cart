import React from "react";


function Cart(props) {
    let totalPrice=0;
    return (
        <div>
            <h3>Items in the Cart:</h3>
            {props.items.map(item => {
                totalPrice = totalPrice+item.price;
                return <><p>{item.name}</p><p>{item.price}</p></> 
            })}
            <h1>Total: ${totalPrice}</h1>
        </div>
    )
}

export { Cart }