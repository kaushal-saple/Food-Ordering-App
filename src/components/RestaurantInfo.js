import Shimmer from "./Shimmer";
import { MENU_URL } from "../Utils/constant";
import { useParams } from "react-router-dom";
import useResData from "../Utils/useResData";

const RestaurantInfo = ()=>{

    const {resID}= useParams();
    const resInfo = useResData(MENU_URL+resID);

    // const[resInfo,setResInfo]=useState(null);   
    // useEffect(()=>{
    //     fetchData();
    // },[])

    // const fetchData = async()=>{
    //    const data =  await fetch(MENU_URL + resID)
    //    const json = await data.json();
    //    setResInfo(json);
    // } 

    

    if(resInfo===null){
        return <Shimmer/>;
    }


    const {areaName,avgRating,costForTwo,cuisines,name} = resInfo?.data?.cards[2]?.card?.card.info;
    const menuItems= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards;
    
    
    // console.log(resID)
    
    return(
        <div>
            <div className="restaurant-detail">
                <h3>{name}</h3>
                <p>Area: {areaName}</p>
                <p>Cost for 2 is ₹{costForTwo/100}</p>
                <p>Rating : {avgRating}</p>
                <p>{cuisines.join(", ")}</p>
            </div>

            <div>
                <h3>Menu</h3>
                <ul>
                    {menuItems.map((item)=>{
                        return <li key={item?.card?.info?.name}>{item?.card?.info?.name} for &nbsp;<b>₹{item?.card?.info?.price/100}</b></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantInfo;