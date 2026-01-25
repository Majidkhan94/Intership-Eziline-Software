import { NavLink } from "react-router"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = ()=>{
  let H3 = ({text})=>{return(<>
    <h3 className="text-white text-sm">{text}</h3>
    <hr className=" mt-2 mb-5 w-15 h-1 bg-white border-0" />
    </>)
  }
  let NAVLINK = ({text,to}) =>{
    return(<>
    <NavLink to={to} className="text-(--BASE) hover:text-white">{text}</NavLink>
    </>)
  }

  return(<>
  
<section className="bg-[#333333] w-full h-135 md:h-100 flex justify-start items-start md:justify-center md:items-center px-3 md:px-0 py-10 md:py-0 flex-col md:gap-8 relative">

<div className="w-full md:w-300 h-full md:h-50 flex flex-col md:flex-row gap-3">
  <div className="w-full md:w-1/3 pr-5 md:pr-20">
    <H3 text={"ABOUT HOMELAND"}/>
    <p className="text-(--BASE) pb-5 md:pb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
  </div>
  <div className="w-full md:w-1/3 pr-10 md:pr-20">
    <H3 text={"NAVIGATIONS"}/>
    <span className="flex flex-row flex-wrap gap-x-8 md:gap-x-30 gap-y-3 justify-between pb-5 md:pb-0">
        <NAVLINK to="/" text="Home" />
        <NAVLINK to="/buy" text="Buy" />
        <NAVLINK to="/rent" text="Rent" />
        <NAVLINK to="/properties" text="Properties" />
        <NAVLINK to="/blog" text="Blog" />
        <NAVLINK to="/about" text="About" />
        <NAVLINK to="/contact" text="Contact" />
    </span>
  </div>
  <div className="w-1/3">
    <H3 text={"FOLLOW US"}/>
    <span className="flex flex-row gap-8">
      <FaFacebookF className="text-(--BASE) hover:text-white cursor-pointer" />
      <FaTwitter className="text-(--BASE) hover:text-white cursor-pointer" />
      <RiInstagramFill className="text-(--BASE) hover:text-white cursor-pointer" />
      <FaLinkedinIn className="text-(--BASE) hover:text-white cursor-pointer" />   

    </span>
  </div>
</div>
<div className="w-full p-5">
  <p className="text-(--BASE) hover:text-white text-sm text-center">Copyright© 2026 | Created by Majid Khan</p>
</div>
</section>
  </>)}