import {NavLink} from "react-router-dom"

export let HeaderNav = ({
    ClassName = `text-[#ff9500] flex font-medium transition-transform duration-300 hover:-translate-y-2 hover:text-white`,
    activeClass = "text-white"})=>{
    return(<>

        <NavLink to={"/"} className={({isActive})=> `${ClassName} ${isActive ? activeClass : ""}`}>Home</NavLink>
        <NavLink to={"/about"} className={({isActive})=> `${ClassName} ${isActive ? activeClass : ""}`}>About Us</NavLink>
        <NavLink to={"/products"} className={({isActive})=> `${ClassName} ${isActive ? activeClass : ""}`}>Products</NavLink>
        <NavLink to={"/blogs"} className={({isActive})=> `${ClassName} ${isActive ? activeClass : ""}`}>Blogs</NavLink>
        <NavLink to={"/contactus"} className={({isActive})=> `${ClassName} ${isActive ? activeClass : ""}`}>Contact Us</NavLink>

    </>)}

    export let FooterNav = ({
        ClassName = `text-[#ff9500] flex font-medium transition-transform duration-300 hover:-translate-y-2 hover:text-white`,
        activeClass = "text-white"
    })=>{

    return(<>

        <HeaderNav />
        <NavLink to={"/termandcondition"} className={({isActive}) => `${ClassName} ${isActive ? activeClass : ""}`}>Termandcondition</NavLink>
        <NavLink to={"/privacypolicy"} className={({isActive})=> `${ClassName} ${isActive ? activeClass : ""}`}>Privacypolicy</NavLink>
        <NavLink to={"/faqs"} className={({isActive})=> `${ClassName} ${isActive ? activeClass : ""}`}>Faqs</NavLink>
    </>)}