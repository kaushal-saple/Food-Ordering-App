import { LOGO_URL} from "../Utils/constant"
import { useState} from "react"
import { Link } from "react-router-dom"


const Header = ()=>{
    // let buttonValue = "Login"
    const [reactBtn, setReactBtn] = useState("Login")

    return (
    <div className="header">
        <img className="logo" alt="logo-image" src={LOGO_URL}/>
        {console.log("header component render")}
        <div className="nav-list">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
                <li><Link to="/contact">About us</Link></li>
                
              
                
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