import {Routes,Route} from "react-router"
import { Layout } from "../Layout"
import { About,Contacts,Gallery,Home,Menu,Ourchef} from "../index"

export let Routing = ()=>{return(<>
<Routes>
    <Route path="/"                 element = {<Layout />}>
        <Route path="/"                 element = {<Home />}/>
        <Route path="/about"            element = {<About />}/>
        <Route path="/contacts"         element = {<Contacts />}/>
        <Route path="/gallery"          element = {<Gallery />}/>
        <Route path="/menu"             element = {<Menu />}/>
        <Route path="/ourchef"          element = {<Ourchef />}/>
    </Route>
</Routes>



</>)}