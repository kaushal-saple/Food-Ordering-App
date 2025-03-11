import RestaurantCard from "./RestaurantCard"
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { Data_URL } from "../Utils/constant";
import useOnline from "../Utils/UseOnline";

const Body = () =>{
    const [listOfRestaurant,setListOfRestaurants] = useState([]);
    const [searchRestaurant,setSearchRestaurnat] = useState([])
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData()
        },[]);

    const fetchData = async ()=>{
        const data = await fetch(Data_URL)
        const json = await data.json();
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setSearchRestaurnat(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus  = useOnline();

    if(onlineStatus===false){
        return <h1>Oops!! Looks like you are offline!!!</h1>
    }
    // conditional rendering
    return listOfRestaurant.length===0?(<Shimmer/>):
    (
    <div className="body">
        
        <div className="features">

            <div className="search">
                <input type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                
                <button onClick={()=>{
                   //filter
                   const filterListOfRes = listOfRestaurant.filter((ele)=>ele.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setSearchRestaurnat(filterListOfRes)
                }}>Search</button>
            </div>

            <div className="filter-btn">
                <button className="btn"
                onClick={()=>{
                    const filterRes = listOfRestaurant.filter((restaurant)=>{
                        return restaurant?.info?.avgRating>4.3;
                    });
                    setSearchRestaurnat(filterRes)
                }}
                >Filter Restaurant</button>
            </div>
        </div>

        <div className="restaurants-container">
           {searchRestaurant.map(restaurant =>(
            <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id} ><RestaurantCard resInfo={restaurant}/></Link>
           ))
           }
        
        </div>
    </div>
)}

export default Body