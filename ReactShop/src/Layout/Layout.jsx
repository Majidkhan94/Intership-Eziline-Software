import { Outlet } from "react-router"
import { Header, Footer, Breadcrumb } from "../Exportfiles"

export let Layout = ()=>{
    return(<>
        <Header />
        <Breadcrumb/>
        <Outlet />
        <Footer />
    </>)}