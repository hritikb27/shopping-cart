import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='nav'>
            Logo
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav