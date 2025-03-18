import { LOGO_URL} from "../Utils/constant"
import { useState,useContext} from "react"
import { Link } from "react-router-dom"
import useOnline from "../Utils/UseOnline"
import userContext from "../Utils/userContext"


const Header = ()=>{
    // let buttonValue = "Login"
    const [reactBtn, setReactBtn] = useState("Login")
    const isOnline = useOnline();

    const {loggedInUser} = useContext(userContext);


    

    return (
    <div className="flex m-3 p-3 justify-between border rounded-md bg-slate-100 shadow-lg">
        <img className="w-32 h-20 rounded-md" alt="logo-image" src={LOGO_URL}/>
        
        <div className="flex items-center text-lg font-semibold">
            <div>OnlineStatus: {isOnline?"🟢":"🔴"}</div>
            <ul className="flex items-center">
                {/* <li>Online Status</li> */}
                <li className="mx-2 px-2 text-lg hover:text-blue-800"><Link to="/">Home</Link></li>
                <li className="mx-2 px-2 text-lg  hover:text-blue-800"><Link to="/aboutus">About us</Link></li>
                <li className="mx-2 px-3 text-lg  hover:text-blue-800"><Link to="/contact">Contact us</Link></li>
                <li className="mx-2 px-2 text-lg  hover:text-blue-800"><Link to="/daily-mart">Daily Mart</Link></li>
                <li>
                    <div>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2" onClick={()=>{
                            reactBtn==="Login"?
                            setReactBtn("Log-out"):
                            setReactBtn("Login");
                            
                        }} >{reactBtn}</button>
                    </div>
                </li>
                <li className="mx-2 px-2 text-lg  hover:text-blue-800">
                    {loggedInUser}
                </li>
            </ul>
        </div>
    </div>
)}

export default Header