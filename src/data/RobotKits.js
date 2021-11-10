import { Fragment } from "react"
import { RobotKits } from "./productData"

function RobotKitsPage() {
    return (
        <div className='productImages'>
            {RobotKits.map(item => {
                return <div>
                    <img src={item.url} />
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                </div>
            })}
        </div>
    )
}

export default RobotKitsPage