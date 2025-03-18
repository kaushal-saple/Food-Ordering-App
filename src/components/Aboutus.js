import UserFunctional from "./UserFunctional";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../Utils/userContext";

class Aboutus extends React.Component{

    constructor(){
        super()
        }
    
    componentDidMount(){
        
    }

    render(){
       
        return(
            <div>
                <h2>About us</h2>
                {/* <UserFunctional name={"Kaushal saple"} location={"shahapur"}/> */}
                <hr></hr>
                <UserClass ></UserClass>

                <userContext.Consumer>
                    {(data)=><h1>{data.loggedInUser}</h1>}
                </userContext.Consumer>

            </div>

        )
    }
}
export default Aboutus;

