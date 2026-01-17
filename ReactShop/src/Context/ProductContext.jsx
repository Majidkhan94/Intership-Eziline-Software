import Allproducts from "../Jsonfiles/Allproducts.json"
import Deals from "../Jsonfiles/Deals.json"
import Newarrival from "../Jsonfiles/Newarrival.json"
import Ourproducts from "../Jsonfiles/Ourproducts.json"
import { createContext, useContext } from "react"

let products = Array.from( new Map(
[...Allproducts, ...Deals, ...Newarrival, ...Ourproducts]
.map(item => [item.Id, item])).values());
export let ProductContext = createContext();
export let UseProducts = () => useContext(ProductContext);
export let ProductContextProvider = ({children})=>{
    return(
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
    )}
