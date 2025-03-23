import { useState } from "react";
import RestaurantCategoryDes from "./RestaurantCategoryDes";

const RestaurantCategory = ({categoryData,showDescription,setShowIndex})=>{

    function description(){
        setShowIndex();
    }


    return(
        <div>
            
            <div className="shadow-xl cursor-pointer" onClick={()=>description()}>
                <div className="flex justify-between w-full h-12  my-2 py-2  ">
                    <div className="relative left-10 font-bold text-xl">{categoryData?.card?.card?.title}({categoryData?.card?.card?.itemCards.length})</div>
                    <div className="relative right-10">⬇</div>
                </div>
           </div>


            <div >
                {/* {if description is true then only only render the description } */}
               {showDescription && <div>
                    {categoryData.card.card.itemCards.map((list)=>(
                        <RestaurantCategoryDes  key={list?.card?.info?.id} data = {list} />
                    ))}
                </div>}
            </div>
        </div>

    )
}

export default RestaurantCategory;