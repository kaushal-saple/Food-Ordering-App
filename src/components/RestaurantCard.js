import { CDN_URL } from "../Utils/constant"
import userContext from "../Utils/userContext";
import React, { useContext } from "react";


const RestaurantCard = ({resInfo})=>{
    const {loggedInUser} = useContext(userContext)

    const {
        name,
        locality,
        cuisines,
        avgRating,
        cloudinaryImageId}
        = resInfo?.info;
    return(
        <div className="m-5 mr- p-4 bg-slate-200 w-56 break-words h-80 rounded-md shadow-md hover:shadow-lg hover:shadow-indigo-400 space-y-2">
            <img className="w-full h-[120px] mb-3  rounded-md" src={CDN_URL + cloudinaryImageId} />
            <p className="text-base font-bold">{name}</p>
            <p className="text-sm text-gray-600">{locality}</p>
            <p className="text-sm text-gray-600">
            {cuisines.join(", ")}
            </p>
            <p className="text-sm font-medium">{avgRating} Stars</p>
            <p>
                {loggedInUser}
            </p>
        


      </div>)
}

//Higher Order Component function

{/* 
    input - component
    output- enhanced componnent
    */}

export const isOpenComp = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div className="relative">
                <label className="absolute bg-opacity-70 text-white bg-black rounded m-1 p-1">Open Now</label>
                <RestaurantCard {...props}/>
            </div>
        )
    } 
            
}

export default RestaurantCard;
