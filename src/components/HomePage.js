import React from "react";
import {Link} from "react-router-dom"

function HomePage(){

    return(
        <div className='homepage'>
            <div className='navText'>
                <h1>Welcome to 2050's Robot Shop!</h1>
                <p>Explore around our shop which includes the latest technology from the future.</p>
                <Link to='/shop'>
                <button>Shop!</button>
                </Link>
            </div>

            <div className="image">
                <img src='https://www.asme.org/getmedia/f355a774-eb66-4316-ad13-cff49d7645ee/101419_top5robots_hero.jpg?width=920&height=720&ext=.jpg'/>
            </div>
        </div>
    )
}

export default HomePage