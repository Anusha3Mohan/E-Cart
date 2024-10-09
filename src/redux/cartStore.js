import productSlice from "./slice/productSlice";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";


const cartStore = configureStore({
    reducer:{
        productSlice,
        wishlistSlice,
        cartReducer:cartSlice
    }
})

export default cartStore