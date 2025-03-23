import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
        
    },
    reducers:{
        AddItems:(state,action)=>{
            state.items.push(action.payload)
        },
        RemoveItems:(state,action)=>{
            state.items.splice(action.payload,1)
        },
        ClearItems:(state)=>{
            state.items.length = 0;
        }
    }
})



export const {AddItems,RemoveItems,ClearItems} = cartSlice.actions;
export default cartSlice.reducer;