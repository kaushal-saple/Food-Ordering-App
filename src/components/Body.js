import RestaurantCard ,{isOpenComp} from "./RestaurantCard"
import {useState,useEffect,useContext} from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { Data_URL } from "../Utils/constant";
import useOnline from "../Utils/UseOnline";
import userContext from "../Utils/userContext";


const Body = () =>{
    const [listOfRestaurant,setListOfRestaurants] = useState([]);
    const [searchRestaurant,setSearchRestaurnat] = useState([]);
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

    // higher order component
    const RestaurantCardOpen = isOpenComp(RestaurantCard);
    const {loggedInUser,setUserName} = useContext(userContext)

    const onlineStatus  = useOnline();
    if(onlineStatus===false){
        return <h1>Oops!! Looks like you are offline!!!</h1>
    }

    // conditional rendering
    return listOfRestaurant.length===0?(<Shimmer/>):
    (
    <div className="mx-1">    
        <div className="flex my-3  p-3 space-x-3 items-center">

{/* Search Space */}
            <div className="search space-x-2">
                <input className="p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search here..." type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2" onClick={()=>{
                   //filter
                   const filterListOfRes = listOfRestaurant.filter((ele)=>ele.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setSearchRestaurnat(filterListOfRes)
                }}>Search</button>
            </div>


 {/* Filter button */}
            <div className="filter-btn">
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
                onClick={()=>{
                    const filterRes = listOfRestaurant.filter((restaurant)=>{
                        return restaurant?.info?.avgRating>4.3;
                    });
                    setSearchRestaurnat(filterRes)
                }}
                >Filter Restaurant</button>
            </div>

{/* input field to change userName dynamically using useContext */}

            <div>
                <label>Username</label>
                <input className="p-2 ml-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                 type="text"
                 value={loggedInUser}
                 onChange={(e)=> setUserName(e.target.value)}
                 ></input>
            </div>

        </div>

{/* Restaurant cards */}
        <div className="flex flex-wrap bg-slate-100 mx-3 rounded-md">
            {/* if search text is not found condition */}
            {listOfRestaurant!==0 && searchRestaurant.length==0?
            (<h2 className="text-center w-full  text-red-500 text-lg p-4" >No result found</h2>):

            searchRestaurant.map(restaurant =>(
                restaurant.info.isOpen?
                <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id} ><RestaurantCardOpen resInfo={restaurant}/></Link>:
                <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id} ><RestaurantCard resInfo={restaurant}/></Link>
           ))
           }
        
           
        </div>
    </div>
)}

export default Body