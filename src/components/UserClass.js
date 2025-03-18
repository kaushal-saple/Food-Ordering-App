import React from "react";

class UserClass extends React.Component{
    constructor(props){
        
        super(props);

        this.state={
            count:0,
            dataInfo:{
                name:"dummy name",
                location:"dummy Location"               
            }
            
        }
    };

    async componentDidMount(){
       
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        

        this.setState({
            dataInfo:json
        })
    }


    
    render(){
        
        const{count} = this.state
        // console.log(this.state.dataInfo)
        const{name,location,followers} = this.state.dataInfo;
       
        return(
            <div>
            <h3>Name :{name}</h3>
            <h3>Location : {location}</h3>
            <h3>followers: {followers}</h3>
            <h3>Contact : saplekaushal@gmail.com</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1
                })
            }}>Click me</button>
        </div>
        )
    }
}

export default UserClass;