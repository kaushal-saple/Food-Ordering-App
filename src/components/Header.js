import { LOGO_URL} from "../Utils/constant"
import {useState} from "react"


const Header = ()=>{
    // let buttonValue = "Login"
    const [reactBtn, setReactBtn] = useState("Login")

    return (
    <div className="header">
        <img className="logo" alt="logo-image" src={LOGO_URL}/>

        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Cart</li>
                <li>
                    <div className="btn">
                        <button onClick={()=>{
                            reactBtn==="Login"?
                            setReactBtn("Log-out"):
                            setReactBtn("Login");
                            
                        }} >{reactBtn}</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
)}

export default Header