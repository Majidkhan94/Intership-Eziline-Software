import bgHeader from "../../public/bgHeader.jpg"
import Chef1 from "../../public/Chefs/Chef1.jpg";
import Chef2 from "../../public/Chefs/Chef2.jpg";
import Chef3 from "../../public/Chefs/Chef3.jpg";
import Chef4 from "../../public/Chefs/Chef4.jpg";
import Chef5 from "../../public/Chefs/Chef5.jpg";
import Chef6 from "../../public/Chefs/Chef6.jpg";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";

export let Chefs = () => {
  let  [current, setCurrent] = useState(0);
  let  [itemsPerSlide, setItemsPerSlide] = useState(1);

 let Data = [
    { Img: Chef1, Title: "Orni Stark", Description: "Founder" },
    { Img: Chef2, Title: "Biltam Robinson", Description: "Head Chef" },
    { Img: Chef3, Title: "Rabina Ives", Description: "Pastry Chef" },
    { Img: Chef4, Title: "Peter Emberson", Description: "Assistant Chef" },
    { Img: Chef5, Title: "Samantha Clark", Description: "Administrator" },
    { Img: Chef6, Title: "Ryan Ricks", Description: "Sous Chef" },
  ]


  useEffect(() => {
    
    let handleResize=()=>{ window.innerWidth >= 768 ? setItemsPerSlide(3) : setItemsPerSlide(1)}
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

}, []);

  const slides = Math.ceil(Data.length / itemsPerSlide);

  return (
    <section className="pb-10">
      
      <h1 className="text-4xl md:text-5xl text-center font-light p-10 md:p-15 text-transparent bg-clip-text bg-cover"
        style={{ backgroundImage: `url(${bgHeader})` }} > Our Chefs </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-700"
             style={{ transform: `translateX(-${current * 100}%)` }}>
          {Data.map((item, idx) => (
            <div key={idx} className=" shrink-0 w-full md:w-1/3 p-2 flex flex-col justify-center items-center">
              <img src={item.Img} className="rounded-full w-40 md:w-48" />
              <span className="flex flex-col gap-2 justify-center items-center py-6">
                <h2 className="text-2xl md:text-3xl text-(--MAIN)"> {item.Title} </h2>
                <p className="text-lg text-gray-500">{item.Description}</p>
                <div className="flex text-2xl md:text-4xl gap-5 text-(--MAIN)">
                  <NavLink to=""> <CiFacebook /> </NavLink>
                  <NavLink to=""> <CiTwitter /> </NavLink>
                  <NavLink to=""> <CiInstagram /> </NavLink>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: slides }).map((_, idx) => (
          <button key={idx} className={`w-3 h-3 rounded-full
            ${current === idx ? "bg-(--MAIN)" : "bg-gray-300" }`}
            onClick={() => setCurrent(idx)} ></button>
        ))}
      </div>
    </section>
  );
};
