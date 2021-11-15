import React from "react";

function Cart(props) {
  let totalPrice = 0;
  return (
    <div className="cart">
      <h3>Items in the Cart:</h3>
      <div className="cartInfo">
        {props.items.map((item) => {
          totalPrice = totalPrice + item.price * props.quantity[item.name];
          return (
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>{" "}
              <label>
                Quantity:{" "}
                <input
                  type="number"
                  value={props.quantity[item.name]}
                  onChange={(event) =>
                    props.changeQuantity(item.name, event.target.value)
                  }
                />
              </label>
            </div>
          );
        })}
      </div>
      <h1>Total: ${parseFloat(totalPrice)}</h1>
    </div>
  );
}

export { Cart };
