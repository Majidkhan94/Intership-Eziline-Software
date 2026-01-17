import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "../Store/CartSlice"

export let Store = configureStore({
   reducer:{
      
      Cart: CartReducer
  }})