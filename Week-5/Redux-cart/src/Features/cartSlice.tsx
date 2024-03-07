import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products :[],
    cart : []
}

const cartSlice = createSlice({
     name : "cart", 
    initialState,
    reducers:{
            initProducts :( state,action) =>{
                return{...state,products:action.payload};
            },
            addToCard : (state, action)=>{ 

            },

            removeFromCart :(state,action)=>{

            }
    }


    
})
export const {initProducts,addToCard,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;