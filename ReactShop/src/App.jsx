import { BrowserRouter } from "react-router-dom";
import {Routing} from "./Routing/Routing"; // adjust if different
import { ProductContextProvider } from "./Context/ProductContext";
import { Provider } from "react-redux";
import {Store}  from "./Store/Store";

export let App = ()=> {
  return (
    
    <Provider store={Store}>
    <ProductContextProvider>
    
    
    <BrowserRouter>
      
      
        <Routing />
    
    </BrowserRouter>
      </ProductContextProvider>
</Provider>
  );
}
