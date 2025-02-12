import { CDN_URL } from "../Utils/constant"
const RestaurantCard = ({resInfo})=>{
    const {
        name,
        locality,
        cuisines,
        avgRating,
        cloudinaryImageId}
        = resInfo?.info;
    return(
    <div className="restaurantCard">
        <img className="res-img" src={ CDN_URL+ cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} Stars</h4>
    </div>)
}

export default RestaurantCard;
