import Card1 from "../../public/Card/Card1.jpg"
import Card2 from "../../public/Card/Card2.jpg"
import Card3 from "../../public/Card/Card3.jpg"
import Card4 from "../../public/Card/Card4.jpg"
import Card5 from "../../public/Card/Card5.jpg"
import { MdViewList } from "react-icons/md";
import { HiViewGrid, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react"

export const Services = ()=>{
  let BUTTON  = ({
    text,
    className = "border border-gray-200 py-2 px-4 md:py-3 md:px-5 rounded-full cursor-pointer",
    addclass = "",
  })=>{
    return(<>
    <button className={`${className} ${addclass}`}>
        {text}
    </button>
    </>)
  }
  
  let [view,setView] = useState("grid")
  
  let CardDetails = 
    [
      { 
        Image: Card1, Name: "625 S. Berendo St", location: "1 New York Ave, Warners Bay, NSW 2282",
        Price: "$2,265,500", Beds: "BEDS", BedsValue: "2", Bath: "BATH", BathValue: "2",
        Sqft: "SQFT", SqftValue: "7000", Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse."
      },
      { 
        Image: Card2, Name: "625 S. Berendo St", location: "1 New York Ave, Warners Bay, NSW 2282",
        Price: "$2,265,500", Beds: "BEDS", BedsValue: "2", Bath: "BATH", BathValue: "2",
        Sqft: "SQFT", SqftValue: "7000", Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse."
      },
      { 
        Image: Card3, Name: "625 S. Berendo St", location: "1 New York Ave, Warners Bay, NSW 2282",
        Price: "$2,265,500", Beds: "BEDS", BedsValue: "2", Bath: "BATH", BathValue: "2",
        Sqft: "SQFT", SqftValue: "7000", Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse."
      },
      { 
        Image: Card4, Name: "625 S. Berendo St", location: "1 New York Ave, Warners Bay, NSW 2282",
        Price: "$2,265,500", Beds: "BEDS", BedsValue: "2", Bath: "BATH", BathValue: "2",
        Sqft: "SQFT", SqftValue: "7000", Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse."
      },
      { 
        Image: Card5, Name: "625 S. Berendo St", location: "1 New York Ave, Warners Bay, NSW 2282",
        Price: "$2,265,500", Beds: "BEDS", BedsValue: "2", Bath: "BATH", BathValue: "2",
        Sqft: "SQFT", SqftValue: "7000", Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse."
      },
      { 
        Image: Card1, Name: "625 S. Berendo St", location: "1 New York Ave, Warners Bay, NSW 2282",
        Price: "$2,265,500", Beds: "BEDS", BedsValue: "2", Bath: "BATH", BathValue: "2",
        Sqft: "SQFT", SqftValue: "7000", Description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse."
      },
    ]
    
    return(<>
  
  <div className="flex flex-col md:flex-row gap-3 items-center justify-between border-b border-gray-200 
                        py-4 px-3 md:px-15 bg-white">
    {/* Left Side: Icons */}
    <div className="flex items-center gap-3 text-xl cursor-pointer">
      <button onClick={()=>setView("grid")}>
      <HiViewGrid className={view === "grid" ? "hover:text-(--GREEN) transition-colors cursor-pointer" : ""}/>
      </button>
      <button onClick={()=>setView("list")}>
      <MdViewList className={view === "list" ? "text-gray-600 hover:text-(--GREEN) transition-colors cursor-pointer" : ""} />
    </button>
    </div>
  
    {/* Right Side: Filters & Sort */}
    <div className="flex items-center gap-4 text-gray-600 font-medium">
      <div className="flex items-center gap-3">
        <span className="cursor-pointer hover:text-black">All</span>
        <span className="text-gray-300">|</span>
        <span className="cursor-pointer hover:text-black">Rent</span>
        <span className="text-gray-300">|</span>
        <span className="cursor-pointer hover:text-black">Sale</span>
        <span className="text-gray-300">|</span>
        <select className="border border-gray-300 rounded px-3 py-1 text-sm"
        >
          <option value="">Sort by</option>
          <option value="asc">Price Ascending</option>
          <option value="desc">Price Descending</option>
        </select>
      </div>
    </div>
  </div>
  
  <div className="flex flex-wrap justify-center gap-6 p-3 md:p-6 bg-gray-50">
    {CardDetails.map((item, idx) => {
      return (<>
        
    {view == "grid" && (
      <div key={idx} className="flex-none w-full sm:w-87 bg-white rounded-lg shadow-md overflow-hidden
                     group cursor-pointer" >
          
      <div className="relative h-60 w-full">
        <img src={item.Image} className="w-full h-full object-cover transition-transform 
                              duration-300group-hover:scale-105" />
             
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        <span className="bg-(--RED) text-white text-xs px-3 py-1 rounded">
          SALE
        </span>
        <span className="bg-(--GREEN) text-white text-xs px-3 py-1 rounded">
          RENT
        </span>
      </div>
  
        <button className="absolute -bottom-6 right-5 bg-white p-4 rounded-full text-(--RED) hover:text-white hover:bg-(--RED) hover:cursor-pointer transition-all z-10">
          <AiOutlineHeart size={22} />
        </button>
      </div>
  
      <div className="p-6 pt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {item.Name}
        </h2>
            
            <div className="flex items-start gap-1 text-lg text-gray-400 mb-4">
              <HiOutlineLocationMarker />
              <p className="text-sm">{item.location}</p>
            </div>
  
            <p className="text-(--GREEN) text-2xl font-bold mb-6">
              ${item.Price}
            </p>
  
            <div className="flex items-start justify-start md:items-center md:justify-center gap-10 text-gray-500">
  
              {/* Beds */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400">{item.Beds}</span>
                <p className="text-lg font-bold text-gray-700">{item.BedsValue}</p>
              </div>
              
              {/* Baths */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400">{item.Bath}</span>
                <p className="text-lg font-bold text-gray-700">{item.BathValue}</p>
              </div>
              
              {/* Sq Ft */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400">{item.Sqft}</span>
                <p className="text-lg font-bold text-gray-700">{item.SqftValue}</p>
              </div>
            </div>
          </div>
        </div>)}
  
  {view =="list" && (
    <div key={idx} className="flex flex-col md:flex-row w-full bg-white rounded-lg shadow-md overflow-hidden
                   group cursor-pointer">
      
      {/* Image Section - Left side on Desktop */}
      <div className="relative h-64 md:h-auto md:w-2/5 shrink-0">
        <img src={item.Image} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        
        {/* Sale/Rent Tags - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-(--RED) text-white text-[10px] font-bold px-3 py-1 rounded">
            SALE
          </span>
          <span className="bg-(--GREEN) text-white text-[10px] font-bold px-3 py-1 rounded">
            RENT
          </span>
        </div>
  
        {/* Heart Icon - Top Right (as per Image 2) */}
        <button className="absolute top-4 right-4 bg-white p-3 rounded-full text-(--RED) hover:text-white hover:bg-(--RED) transition-all z-10">
          <AiOutlineHeart size={20} />
        </button>
      </div>
  
      {/* Content Section - Right side */}
      <div className="p-10 flex flex-col justify-center flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {item.Name}
        </h2>
        
        <div className="flex items-center gap-1 text-gray-400 mb-4">
          <HiOutlineLocationMarker className="text-lg" />
          <p className="text-sm">{item.location}</p>
        </div>
  
        <p className="text-(--GREEN) text-2xl font-bold mb-4">
          ${item.Price}
        </p>
  
        {/* Description - Added for List View as per Image 2 */}
        <p className="text-gray-500 text-sm mb-6">
          {item.Description}
        </p>
  
        {/* Features Section - Bottom */}
        <div className="flex items-center gap-10 text-gray-500">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400">BEDS</span>
            <p className="text-lg font-bold text-gray-700">{item.BedsValue}</p>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400">BATHS</span>
            <p className="text-lg font-bold text-gray-700">{item.BathValue}</p>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400">SQ FT</span>
            <p className="text-lg font-bold text-gray-700">{item.SqftValue}</p>
          </div>
        </div>
      </div>
    </div>
  )}
      </>);
    })}
  </div>


    <div className="bg-gray-50 flex justify-center items-center gap-2 py-5">
      <BUTTON text="1" addclass="bg-(--GREEN) text-white"/>
      <BUTTON text="2"/>
      <BUTTON text="3"/>
      <BUTTON text="4"/>
      <BUTTON text="5"/>
    </div>




  </>)}