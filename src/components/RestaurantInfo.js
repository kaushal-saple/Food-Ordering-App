import Shimmer from "./Shimmer";
import { MENU_URL } from "../Utils/constant";
import { useParams } from "react-router-dom";
import useResData from "../Utils/useResData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantInfo = ()=>{

    const {resID}= useParams();
    const resInfo = useResData(MENU_URL+resID);
    const [showIndex,setShowIndex] = useState(null)
   

    if(resInfo===null){
        return <Shimmer/>;
    }


    const {areaName,avgRating,costForTwo,cuisines,name} = resInfo?.data?.cards[2]?.card?.card.info;
    const menuItems= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards;
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((category)=>(
        category?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
    
    
    
    // console.log(resID)
    const dummy = "dummy data";
    
    return(
        <div className="max-w-[850px] mx-auto">
            <div className="restaurant-detail text-center">
                <h3 className="text-2xl font-bold ">{name}</h3>
                <div className="flex justify-center space-x-5 font-medium">
                    <p >Rating : {avgRating}⭐</p>
                    <p>•₹{costForTwo/100} for two</p>
                    
                </div>
                <p className="text-gray-600">Location: {areaName}</p>
                <p className="text-gray-600">{cuisines.join(", ")}</p>
            </div>
            <hr className="mt-2"></hr>

            
            <div>
                <div className="m-3 p-3 space-y-6 shadow-lg">
                    {categories.map((category,index)=>(
                        <RestaurantCategory key={category?.card?.card?.title} 
                            categoryData = {category} 
                            showDescription = {index == showIndex && true}
                            setShowIndex = {()=>setShowIndex(index == showIndex?null:index)}
                            
                         ></RestaurantCategory>
                    ))}
                </div>

                
            </div>
           



        </div>

        
    )
}

export default RestaurantInfo;