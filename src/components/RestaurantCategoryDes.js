import { CDN_URL } from "../Utils/constant";
const RestaurantCategoryDes = ({data})=>{
    return(
        <div>
           
            <hr className="mb-3 w-9/12 mx-auto "></hr>
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


        </div>
    )
}

export default RestaurantCategoryDes;