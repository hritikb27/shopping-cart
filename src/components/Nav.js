import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <div className='nav'>
            <h3>robo</h3>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/shop'>
                    <li>Shop</li>
                </Link>

                <Link to='/cart'>
                <li>Cart</li>
                <span>{props.amount}</span>
                </Link>
            </ul>
        </div>
    )
}

export default Nav