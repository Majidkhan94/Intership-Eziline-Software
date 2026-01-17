import { useEffect, useState } from "react"
import team1 from "../../public/Images/team1.jpg"
import team2 from "../../public/Images/team2.jpg"
import team3 from "../../public/Images/team3.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import About1 from "../../public/Images/About1.png"
import About2 from "../../public/Images/About2.png"
import About3 from "../../public/Images/About3.png"
import About4 from "../../public/Images/About4.png"

export let About = ()=>{
    let data = [
        {img: team1, name : "Joeby Ragpa", desc : "Ceo of Company", icon : [<FaXTwitter />,<FaFacebookF />,<FaGooglePlusG />] },
        {img: team2, name : "Mat Trump", desc : "Ceo of Company", icon : [<FaXTwitter />,<FaFacebookF />,<FaGooglePlusG />] },
        {img: team3, name : "Clint Marshal", desc : "Ceo of Company", icon : [<FaXTwitter />,<FaFacebookF />,<FaGooglePlusG />] },
    ]

    let aboutdata = [
        {aimg: About1, title : "Endless Possibilities", description : "Web design team will spend time with our digital marketing team."},
        {aimg: About2, title : "SEO OPTIMIZED", description : "Web design team will spend time with our digital marketing team."},
        {aimg: About3, title : "BUILT WITH UX", description : "Web design team will spend time with our digital marketing team."},
        {aimg: About4, title : "PAGE BUILDER", description : "Web design team will spend time with our digital marketing team."},

    ]
    
    
    return(<>
    <section id="about">
  <div className=" bg-white rounded-xl flex flex-col justify-center items-center py-20 px-5 md:px-60 gap-3 md:gap-7">
    <span className="text-(--COLOR) tracking-widest">AWESOME TEAM</span>
    <h2 className="text-center font-medium text-2xl md:text-5xl md:leading-12">We Are Proud To WORK</h2>
  </div>

  <div className="flex flex-col md:flex-row gap-7 justify-center items-center px-35">
    {data.map((item, idx) => (
      <div key={idx} className="relative w-100 h-100 group rounded-xl overflow-hidden shadow-lg">
        {/* Team Image */}
        <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

        {/* Overlay on Hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/70 flex flex-col justify-center items-center gap-2 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h1 className="text-black text-xl font-bold">{item.name}</h1>
          <p className="text-gray-600">{item.desc}</p>
          <div className="flex gap-4 text-gray-600 text-lg">
            {item.icon.map((Icon, i) => (
              <span key={i} className="hover:text-(--COLOR) transition-colors cursor-pointer">{Icon}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>



<div className="p-5 py-15 flex flex-col md:flex-row w-full
 md:p-20 md:py-20">
    <div className="text-center flex flex-col gap-3 pb-6 md:pb-6 md:w-full
                    md:text-left md:px-15">
        <span className="text-lg text-(--COLOR)">About Us</span>
        <h1 className="text-2xl font-medium">10 years on the global market.We work since 2005.</h1>
        <p className="text-gray-600 md:text-sm">We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind. Our subconscious mind contains such power and complexity that it literally staggers the imagination. In order to understand how the conscious and subconscious minds work together as a team to create your reality, let me again use an analogy.</p>
    </div>
    <div className="flex flex-col gap-5 md:gap-8 w-full md:items-center md:justify-center">
        
        <div className="w-full bg-gray-100 rounded-2xl">
            <div className="bg-(--COLOR) w-full rounded-2xl flex justify-between px-5">
                <span className="text-white">Design</span>
                <span className="text-white">100%</span>
            </div>
        </div>

        <div className="w-full bg-gray-100 rounded-2xl">
            <div className="bg-(--COLOR) w-70 md:w-110 rounded-2xl flex justify-between px-5">
                <span className="text-white">Html</span>
                <span className="text-white">70%</span>
            </div>
        </div>

        <div className="w-full bg-gray-100 rounded-2xl">
            <div className="bg-(--COLOR) w-80 md:w-130 rounded-2xl flex justify-between px-5">
                <span className="text-white">Css</span>
                <span className="text-white">90%</span>
            </div>
        </div>

        <div className="w-full bg-gray-100 rounded-2xl">
            <div className="bg-(--COLOR) w-75 md:w-120 rounded-2xl flex justify-between px-5">
                <span className="text-white">Javascript</span>
                <span className="text-white">80%</span>
            </div>
        </div>
    
    
    
    
    
    
    </div>
</div>

<div className="bg-(--BG) py-10 w-full">
  <div className="p-2 md:p-20 flex flex-col md:flex-row">
    {aboutdata.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl">
        <img src={item.aimg} className="w-16 h-16 mb-4 bg-(--COLOR) rounded-4xl" />
            <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{item.description}</p>
      </div>
    ))}
  </div>
</div>


















</section>

    </>)}