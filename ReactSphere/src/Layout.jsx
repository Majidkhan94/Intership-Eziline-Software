import { Outlet } from "react-router"
import {Header,Footer, Breadcrums} from "./index"

export let Layout = ()=>{return(<>
<Header />
<Breadcrums />
<Outlet />
<Footer />
</>)}