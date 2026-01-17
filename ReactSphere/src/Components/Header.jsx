import {NavLink} from "react-router"
import bgHeader from "../../public/bgHeader.jpg"
import Logo from "../../public/Logo.png"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";

export let Header=()=>{

    let Navlinks = ({ text, to }) => {return(
    <NavLink to={to} className={({isActive})=>isActive ? "font-semibold text-(--MAIN)" : "hover:text-(--MAIN)"}>
      {text}
    </NavLink>)
}
    let [Open,setOpen] = useState(false)

return(<>

<header className=" bg-black/5 absolute w-full h-20 flex justify-between px-10 md:px-30 items-center bg-cover z-50 top-0 left-0">
        {/* style={{ backgroundImage: `url(${bgHeader})`}} */}

    <NavLink to={"/"}> <img src={Logo} className="w-15"/> </NavLink>
                                
                                {/* PC Version */}

        <nav className="hidden md:block">
            <ul className="flex text-white gap-7 font-medium">
                <li><Navlinks end text={"Home"} to={"/"}/></li>
                <li><Navlinks end text={"About"} to={"/about"}/></li>
                <li><Navlinks end text={"Menu"} to={"/menu"}/></li>
                <li><Navlinks end text={"Gallery"} to={"/gallery"}/></li>
                <li><Navlinks end text={"Ourchef"} to={"/ourchef"}/></li>
                <li><Navlinks end text={"Contacts"} to={"/contacts"}/></li>
            </ul>
        </nav>

                                {/* Mobile Version */}

            {/* Hamburger */}

<button onClick={()=>setOpen(!Open)} className={"text-white text-3xl block md:hidden"}>
    <GiHamburgerMenu />
</button>

    <nav className={`fixed md:hidden w-full h-screen left-0 top-0 bg-cover bg-no-repeat bg-center transition-transform duration-700 ease-linear
         ${Open ? "translate-y-0 z-50" : "-translate-y-full z-50"} `}
         style={{ backgroundImage: `url(${bgHeader})` }}>
  
        <ul className="flex flex-col justify-center items-center h-full p-10 text-white gap-7 font-medium w-full">
        
        <li onClick={()=>setOpen(!Open)} className={`${Open ? "-translate-y-full"  : ""}`}>
            <NavLink className="hover:text-(--MAIN) text-4xl" to="/">Home</NavLink>
        </li>
    
        <li onClick={()=>setOpen(!Open)} className={`${Open ? "-translate-y-full"  : ""}`}>
            <NavLink className="hover:text-(--MAIN) text-4xl" to="/about">About</NavLink>
        </li>
        
        <li onClick={()=>setOpen(!Open)} className={`${Open ? "-translate-y-full"  : ""}`}>
            <NavLink className="hover:text-(--MAIN) text-4xl" to="/menu">Menu</NavLink>
        </li>
    
        <li onClick={()=>setOpen(!Open)} className={`${Open ? "-translate-y-full"  : ""}`}>
            <NavLink className="hover:text-(--MAIN) text-4xl" to="/gallery">Gallery</NavLink>
        </li>
    
        <li onClick={()=>setOpen(!Open)} className={`${Open ? "-translate-y-full"  : ""}`}>
            <NavLink className="hover:text-(--MAIN) text-4xl" to="/ourchef">Ourchef</NavLink></li>
    
        <li onClick={()=>setOpen(!Open)} className={`${Open ? "-translate-y-full"  : ""}`}>
            <NavLink className="hover:text-(--MAIN) text-4xl" to="/contacts">Contacts</NavLink>
        </li>
  </ul>
</nav>

</header>
</>)}