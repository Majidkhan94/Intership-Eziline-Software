import { NavLink } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Header = () => {

  const [open,setOpen] = useState(false)
  const NAVLINK = ({ text, to,className = `text-(--BASE) hover:text-white transition`, addclass="", onClick }) => {
    
    return (<>
      <NavLink to={to} className={`${className} ${addclass}`} onClick={onClick} >
      {text}
    </NavLink>
    </>);};

  return (
    <section className="absolute top-0 left-0 w-full z-50 flex justify-between md:justify-between px-3 md:px-20 items-center py-4 bg-transparent">
      <NavLink to="/">
      <h3 className="text-white font-bold text-2xl md:text-3xl">HOMELAND</h3>
      </NavLink>

      {/* PC Version */}

      <div className=" hidden md:block">
      <span className="flex flex-row gap-8 items-center">
        <NAVLINK to="/" text="Home" />
        <NAVLINK to="/buy" text="Buy" />
        <NAVLINK to="/rent" text="Rent" />
        
        <div className="relative group">
          
          <NAVLINK to="/properties" text={ 
            <span className="flex items-center gap-1">
                  Properties
                  <BiDownArrowAlt className="text-lg transition group-hover:rotate-180" />
            </span>
    } addclass="flex items-center gap-1 text-(--BASE) hover:text-white transition"/>

          {/* Dropdown Menu */}
          <div
  className="absolute top-8 left-0 w-48 bg-[#333333] invisible group-hover:visible -translate-y-40 group-hover:translate-y-0
             transition-all duration-1000 ease-out rounded-md shadow-lg">
            <NAVLINK to="/condo" text="Condo" addclass="block px-4 py-2 text-sm text-white hover:bg-white/10 transition"/>
            <NAVLINK to="/propertyland" text="Propertyland" addclass="block px-4 py-2 text-sm text-white hover:bg-white/10 transition"/>
            <NAVLINK to="/commercialBuilding" text="CommercialBuilding" addclass="block px-4 py-2 text-sm text-white hover:bg-white/10 transition"/>
       </div>
        </div>
        <NAVLINK to="/blog" text="Blog" />
        <NAVLINK to="/about" text="About" />
        <NAVLINK to="/contact" text="Contact" />
      </span>
  </div>
                {/* Mobile Version */}

                
    <div className="block md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="z-50 text-white text-3xl"
      >
        <RxHamburgerMenu />
      </button>

      {/* Fullscreen Menu */}
      <span
  className={`fixed top-0 left-0 w-full h-full z-40 flex flex-col gap-2 items-center justify-center p-8 bg-black transition-transform duration-1000 ease-in-out transform ${ open ? "translate-y-0" : "-translate-y-full" }`} >
        <NAVLINK to="/" text="Home" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/buy" text="Buy" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/rent" text="Rent" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/properties" text="Properties" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/condo" text="Condo" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/propertyland" text="Propertyland" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/commercialBuilding" text="CommercialBuilding" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/blog" text="Blog" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/about" text="About" addclass="text-2xl" onClick={() => setOpen(!open)}/>
        <NAVLINK to="/contact" text="Contact" addclass="text-2xl" onClick={() => setOpen(!open)}/> 
      </span>
    </div>
    </section>
  );
};
