import { Button, Card, Slider } from "../Exportfiles";
import Deals from "../Jsonfiles/Deals.json"
import { NavLink } from "react-router";
import offer1 from "../../public/Offers/offer1.png"
import offer2 from "../../public/Offers/offer2.png"
import offer3 from "../../public/Offers/offer3.png"
import offer4 from "../../public/Offers/offer4.png"
import Singleoffer from "../../public/Offers/Singleoffer.png"
import Ourproducts from "../Jsonfiles/Ourproducts.json"
import brand1 from "../../public/Brands/brand1.png"
import brand2 from "../../public/Brands/brand2.png"
import brand3 from "../../public/Brands/brand3.png"
import brand4 from "../../public/Brands/brand4.png"
import brand5 from "../../public/Brands/brand5.png"
import Newarrival from "../Jsonfiles/Newarrival.json"
import { FiBox } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";
import { BsCreditCard2BackFill } from "react-icons/bs";




export let Home = () => {
  return (
    <>

                                        {/* Slider Section */}

    <Slider/>

                                        {/* Deals of the Day */}

    <div className="py-10 md:py-15 ">
        <h1 className="pb-10 md:pb-15 text-3xl text-[#192024] font-medium text-center">Deals of the Day</h1>
        <div className="flex px-0 md:px-10 flex-wrap gap-5 justify-center">
        {Deals.map((item)=>(
            <Card key={item.Id} data={item}/>
        ))}
        </div>
    </div>

                                        {/* Offers */}

      <div className="bg-gray-100 w-full h-full flex flex-col md:flex-row items-center justify-center py-15 gap-10">
        <div>
        <NavLink>
          <div className="relative w-90 md:w-full">
              <img src={offer2} className="rounded-2xl shadow-lg shadow-[#192024]"/>
            <div className="absolute top-10 left-5 md:top-15 md:left-15 z-10">
              <span className="text-sm text-[#192024]">Starting at $144.00</span>
              <h1 className="text-xl md:text-3xl">Eyecare at its best</h1>
            </div>
          </div>
        </NavLink> 
      </div>
      <div>
        <div>
          <NavLink>
          <div className="relative w-90 md:w-155">
              <img src={offer1} className="rounded-2xl shadow-lg shadow-[#192024]"/>
            <div className="absolute top-10 left-5 md:top-10 md:left-10 w-43 md:w-55 z-10">
              <span className="text-sm text-white">Let’s elevate your frame</span>
              <h1 className="text-xl md:text-3xl text-white">Get the vision you deserve</h1>
            </div>
          </div>
        </NavLink>
        </div>

        <div className="flex flex-col md:flex-row  gap-10 md:gap-10 pt-10"> 
          <NavLink>
          <div className="relative w-90 md:w-85">
              <img src={offer3} className="rounded-2xl shadow-lg shadow-[#192024]"/>
            <div className="absolute top-10 left-5 md:top-10 md:left-10 z-10">
              <span className="text-sm text-[#192024]">Couple eyeglasses combo</span>
              <h1 className="text-xl md:text-3xl text-[#192024]">Vision for life</h1>
            </div>
          </div>
        </NavLink><NavLink>
          <div className="relative w-90 md:w-60">
              <img src={offer4} className="rounded-2xl shadow-lg shadow-[#192024]"/>
            <div className="absolute top-10 left-5 md:top-10 md:left-10 z-10">
              <span className="text-sm text-white">let’s buy smart</span>
              <h1 className="text-xl md:text-3xl text-white">For life long</h1>
            </div>
          </div>
        </NavLink>
        </div>

        
      </div>
   
   
   
   
   
      </div>

                                        {/* Our Products */}

  <div className="py-10 md:py-15">
        <h1 className="pb-10 md:pb-15 text-3xl text-[#192024] font-medium text-center">Our Products</h1>
        <div className="flex px-0 md:px-10 flex-wrap gap-5 justify-center">
        {Ourproducts.map((item)=>(
          <Card key={item.Id} data={item}/>
        ))}
        </div>
  </div>

                                        {/* Brands */}

      <div className="bg-gray-100 w-full h-full flex flex-col justify-center py-10 md:py-20">
        <h1 className=" pb-10 text-3xl text-[#192024] font-medium text-center">Brands</h1>
        
        <div className="flex md:flex-row flex-col justify-around items-center md:items-center gap-10">
          <img src={brand1} className=" w-30 md:w-30 opacity-30 filter grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"/>
          <img src={brand2} className=" opacity-30 filter grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"/>
          <img src={brand3} className=" opacity-30 filter grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"/>
          <img src={brand4} className=" opacity-30 filter grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"/>
          <img src={brand5} className=" opacity-30 filter grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"/>
        </div>
   
   
   
      </div>

                                        {/* Single Product */}

      <div className="w-100 md:w-full h-full flex flex-col md:flex-row justify-center py-10 md:py-15">
      
      <div>
        <img src={Singleoffer} className="w-full md:w-180"/>
      </div>
     
      <div className=" w-100 flex flex-col justify-center md:items-start items-center pt-10 md:pt-0">
            <span className="text-sm font-light text-[#192024] pb-1">Trending products buy 1 get 1</span>
            <h1 className="text-center md:text-left text-3xl font-medium text-[#192024] pb-5 leading-10">For the sunglasses you don't yet know.</h1>
            <p className="text-center md:text-left text-gray-600 text-sm pb-6 leading-6 px-5 md:px-0">If you use this site regularly and would like to 
               help keep the site on the Internet, please consider 
               donating a small sum to help pay for the hosting and bandwidth bill.</p>
               <NavLink to={"/products"}>
               <Button text="Shop Now"/>
               </NavLink>
      </div>
      
      
      </div>

                                        {/* New Arrivals */}

<div className="py-10 md:py-15 bg-gray-100">
        <h1 className="pb-10 md:pb-15 text-3xl text-[#192024] font-medium text-center">New arrivals</h1>
        <div className="flex px-10 flex-wrap gap-5 justify-center">
        {Newarrival.map((item)=>(
          <Card key={item.Id} data={item}/>
        ))}
        </div>
  </div>

                                        {/* Support */}

      <div className=" w-90 md:w-full h-full flex flex-col md:flex-row justify-center items-center gap-15 md:gap-20 py-10 md:py-20">
   
   <div className="flex items-center gap-4 cursor-pointer">
    <div className="text-[#ff9500] text-5xl"><FiBox /></div>
    <div>
      <h1 className="text-xl">Speedy delivery</h1>
      <p className="text-gray-600 text-sm">Orders from all item</p>
    </div>
   </div>

   <div className="flex items-center gap-4 cursor-pointer">
    <div className="text-[#ff9500] text-5xl"><HiOutlineRefresh /></div>
    <div>
      <h1 className="text-xl">Easy returns</h1>
      <p className="text-gray-600 text-sm">On all unused items</p>
    </div>
   </div>

   <div className="flex items-center gap-4 cursor-pointer">
    <div className="text-[#ff9500] text-5xl"><FiHeadphones /></div>
    <div>
      <h1 className="text-xl">Online support</h1>
      <p className="text-gray-600 text-sm">Alway online 24/7</p>
    </div>
   </div>

   <div className="flex items-center gap-4 cursor-pointer">
    <div className="text-[#ff9500] text-5xl"><BsCreditCard2BackFill /></div>
    <div>
      <h1 className="text-xl">Secure payment</h1>
      <p className="text-gray-600 text-sm">100% Secure payment</p>
    </div>
   </div>
      
      </div>
    
    
    



    
    
    
    
    
    </>
  );
};
