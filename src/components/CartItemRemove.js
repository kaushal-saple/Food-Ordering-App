// import { CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { RemoveItems } from "../Utils/cartSlice";



const CartItemRemove = ({data,index})=>{
    const dispatch = useDispatch();

    function handleRemoveItem(){
        dispatch(RemoveItems(index));
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
                onClick={(data)=>handleRemoveItem(data)}
                >Remove</button>
            </div>


        </div>
    )
}

export default CartItemRemove;