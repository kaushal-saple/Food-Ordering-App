import UserFunctional from "./UserFunctional";
import UserClass from "./UserClass";
import React from "react";

class Aboutus extends React.Component{

    constructor(){
        super()
        console.log("parent constructor");
        }
    
    componentDidMount(){
        console.log("parent mount")
    }

    render(){
        console.log("parent render")
        return(
            <div>
                <h2>About us</h2>
                {/* <UserFunctional name={"Kaushal saple"} location={"shahapur"}/> */}
                <hr></hr>
                <UserClass ></UserClass>
            </div>

        )
    }
}
export default Aboutus;

