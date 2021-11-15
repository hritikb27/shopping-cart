import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  let quantity = 0;
  if (props.amount.length > 0) {
    // eslint-disable-next-line array-callback-return
    props.amount.map((item) => {
      quantity = quantity + item.quantity;
    });
  }

  return (
    <div className="nav">
      <a href="/" className="logo">
        robo
      </a>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/shop">
          <li>Shop</li>
        </Link>

        <Link to="/cart">
          <li>Cart</li>
          <span>{quantity}</span>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
