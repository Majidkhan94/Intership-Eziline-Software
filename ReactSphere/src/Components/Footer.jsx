import bgHeader from "../../public/bgHeader.jpg"
import Logo from "../../public/Logo.png"
import { NavLink } from "react-router"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export let Footer = ()=>{
    let NavLinks =({text, className, to})=>{
        className="hover:text-(--MAIN)", to = "/menu"
        return(<> <NavLink className={className} to={to}>{text} </NavLink> </>)
    }
    let NavLinksdata =["Burgers","Pizzas","Toasts","Salads","Drinks","Desserts"]

    return(<>

<footer className="w-full h-200 flex flex-col pb-2 text-white md:h-100  md:pt-15"
        style={{ backgroundImage: `url(${bgHeader})`}}>

<div className="w-full h-full flex flex-col justify-center items-center md:flex-row">

<div className="h-60 flex flex-col justify-center p-10 gap-4
                md:w-1/3 md:border-r-2 md:border-[#6a6a6a]">
<img src={Logo} className="w-15"/>
<p className="text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam nam ab saepe magnam placeat dicta libero ipsa aspernatur velit.</p>
<div className="flex flex-col gap-1 pt-0 md:pt-3">
<span className="text-xs md:text-sm">
<b className="text-(--MAIN)">Address: </b>267 Park Avenue New York, NY 90210</span>

<span className="text-xs md:text-sm">
<b className="text-(--MAIN)">Email: </b>Exampleemail@gmail.com</span>

<span className="text-xs md:text-sm">
<b className="text-(--MAIN)">Phone: </b>+92XXXXXXXXXX</span>
</div>
</div>

<div className="flex flex-col px-10 md:w-1/3 md:h-60 md:border-r-2 md:border-[#6a6a6a]">
<h2 className="text-4xl text-(--MAIN)">Our Menu</h2>
<span className="flex flex-wrap gap-x-10 gap-y-3 py-5 md:gap-x-20">
     {NavLinksdata.map((item,idx)=>{ return(
            <NavLinks key={idx} text={item} to={"/menu"} /> ) })}
</span>
<h2 className="text-2xl text-(--MAIN)">Opening Hours</h2>
<span className="pt-3">9:00am-7:00pm</span>
</div>

<div className="w-full px-10 mt-6 flex flex-col md:mt-0 md:w-1/3 md:h-60  md:border-r-2 md:border-[#6a6a6a]">
<h2 className=" text-4xl text-(--MAIN)">Follow us</h2>
<span className="pt-3 flex gap-10 text-2xl pb-8">
    <NavLink to={null} className="hover:text-(--MAIN)"> <FaFacebookF /> </NavLink>
    <NavLink to={null} className="hover:text-(--MAIN)"> <FaTwitter /> </NavLink>
    <NavLink to={null} className="hover:text-(--MAIN)"> <FaInstagramSquare /> </NavLink>
</span>
<h2 className="text-2xl text-(--MAIN)">News Letter</h2>
<span className="pt-2 flex flex-col">
    <input type="text" placeholder="Your Email"  className="border-2 p-2 px-4 rounded-lg "/>
    <span>
    <button className="bg-(--MAIN) px-8 py-2 rounded-lg mt-2">
        <NavLink to={""} className="text-black">Submit</NavLink>
    </button>
    </span>
</span>
</div>

</div>

<div className="border-t-2 w-full border-[#6a6a6a] pt-2">
    <p className="text-white text-xs md:text-sm text-center">Copyright© 2026 | All Right Reserved | Created By Majid Khan</p>
</div>
</footer>
</>)}
 