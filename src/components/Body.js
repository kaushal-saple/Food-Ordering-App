import RestaurantCard from "./RestaurantCard"
import resList from "../Utils/mockData"
import {useState} from "react";


//state variable

// let resData = 

const Body = () =>{
    const [listOfRestaurant,setListOfRestaurants] = useState(resList);
    return (
    <div className="body">
        <div className="filter-btn">
            <button className="btn"
            onClick={()=>{
                const filterRes = listOfRestaurant.filter((restaurant)=>{
                    return restaurant?.info?.avgRating>4.3;
                });

                setListOfRestaurants(filterRes)
                
            }}
            >Filter Restaurant</button>
            
        </div>

        <div className="restaurants-container">
           {listOfRestaurant.map(restaurant =>(
            <RestaurantCard key={restaurant.info.id} resInfo={restaurant}/>
           ))
           }
        
        </div>
    </div>
)}

export default Body