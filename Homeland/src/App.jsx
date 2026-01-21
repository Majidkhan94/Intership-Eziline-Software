import { Routing } from "./Routing/Routing"
import { BrowserRouter } from 'react-router'


export const App = ()=>{
  return(<>
   <BrowserRouter>
    <Routing/>
  </BrowserRouter>
  </>)}