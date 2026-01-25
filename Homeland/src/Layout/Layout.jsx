import { Footer, Header } from "../ExternalFiles"
import {Outlet} from "react-router-dom"

export const Layout = ()=>{
return(<>
  <Header/>
  <Outlet/>
  <Footer/>
</>)}