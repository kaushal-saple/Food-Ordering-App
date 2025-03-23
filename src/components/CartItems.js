import { useSelector} from "react-redux"
import CartItemRemove from "./CartItemRemove";
import { useDispatch } from "react-redux";
import { ClearItems } from "../Utils/cartSlice";

const CartItems=()=>{
const cart = useSelector((store)=>store.cart.items)
const dispatch = useDispatch();


function handleClearCart(){
    dispatch(ClearItems())
}


    return(

        <div >
            <div className="text-center mt-5">
                <button className="text-white bg-black hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
                onClick={handleClearCart}
                > Clear Cart 🛒</button>
            </div>

            {cart.length==0?<h1 className="text-center mt-5 ">No items in cart</h1>:
                <div className="m-10 p-5 w-10/12 mx-auto">
                    {cart.map((list,index)=>(
                            <CartItemRemove key={list?.card?.info?.id} data = {list} index={index}></CartItemRemove>
                    ))}
                </div>
            }

        </div>
    )
}

export default CartItems