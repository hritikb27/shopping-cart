import React from "react"
import { RobotKits } from "./productData"

function RobotKitsPage(props) {
    return (
        <div className='productImages'>
            {RobotKits.map(item => {
                return <div>
                    <img src={item.url} />
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    <button onClick={()=>props.func(item)}>Add To Cart</button>
                </div>
            })}
        </div>
    )
}

export default RobotKitsPage