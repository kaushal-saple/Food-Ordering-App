import { LOGO_URL} from "../Utils/constant"
import { useState} from "react"
import { Link } from "react-router-dom"
import useOnline from "../Utils/UseOnline"


const Header = ()=>{
    // let buttonValue = "Login"
    const [reactBtn, setReactBtn] = useState("Login")
    const isOnline = useOnline();
    

    return (
    <div className="header">
        <img className="logo" alt="logo-image" src={LOGO_URL}/>
        
        <div className="nav-list">
            <div>OnlineStatus: {isOnline?"🟢":"🔴"}</div>
            <ul>
                {/* <li>Online Status</li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/daily-mart">Daily Mart</Link></li>
                
              
                
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