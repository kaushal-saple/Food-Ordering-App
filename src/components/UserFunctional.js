import { useState } from "react";

const UserFunctional = ({name, location})=>{

    const[count,setCount] = useState(0)

    return (
        <div>
            <h3>Name: {name+ ""+ "(functional)"}</h3>
            <h3>Location {location}</h3>
            <h3>Contact : saplekaushal@gmail.com</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>Click me</button>
        </div>
    )
}

export default UserFunctional;