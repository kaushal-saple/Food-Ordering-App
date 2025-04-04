// import { CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { AddItems } from "../Utils/cartSlice";



const RestaurantCategoryDes = ({data})=>{
    const dispatch = useDispatch();

    function handleAddItem(){
        dispatch(AddItems(data));
    }

    return(
        <div className="flex w-9/12 mb-5 relative left-10 justify-between">
        
            <div>
                <div className="w-9/12 mb-5 relative left-10">
                    <p className="font-semibold text-lg text-slate-700">
                        {data?.card?.info?.name}
                    </p>
                    <p className="font-bold">
                    ₹{data?.card?.info?.price/100}
                    </p>
                    <p className=" text-slate-600">
                        {data?.card?.info?.description}
                    </p>             
                </div>    
            </div>

            <div className="flex items-center">
                <button className=" text-white bg-black hover:scale-110 font-medium rounded-lg text-sm px-4 py-2" 
                onClick={(data)=>handleAddItem(data)}
                >Add</button>
            </div>


        </div>
    )
}

export default RestaurantCategoryDes;