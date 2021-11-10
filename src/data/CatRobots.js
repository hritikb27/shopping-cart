import { CatRobotsData } from "./productData"

function CatRobots(){
    return <div className='productImages'>
        {CatRobotsData.map(item=>{
        return <div>
            <img src={item.url} />
            <p>{item.price}</p>
            <p>{item.name}</p>
            <button>Add To Cart</button>
        </div>
    })}
    </div>
}

export default CatRobots