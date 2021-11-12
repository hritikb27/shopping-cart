import React from "react"
import { CatRobotsData } from "./productData"

function CatRobots(props){
    
    return <div className='productImages'>
        {CatRobotsData.map(item=>{
        return <div>
            <img src={item.url} />
            <p>${item.price}</p>
            <p>{item.name}</p>
            <button onClick={(event)=>props.func(item, event.target)}>Add To Cart</button>
        </div>
    })}
    </div>
}

export default CatRobots