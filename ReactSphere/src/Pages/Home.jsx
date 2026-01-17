import { useEffect, useState } from "react"
import Slider1 from "../../public/Slider/Slider1.png"
import Slider2 from "../../public/Slider/Slider2.jpg"
import Slider3 from "../../public/Slider/Slider3.jpg"
import {AboutRestorent,FastDelivery,FreeDelivery,Chefs,Partner,Testimonials} from "../index"
import Menu1 from "../../public/Menu/Menu1.png"
import img1 from "../../public/Home/img1.jpg"
import img2 from "../../public/Home/img2.jpg"
import img3 from "../../public/Home/img3.jpg"
import img4 from "../../public/Home/img4.jpg"

export let Home = ()=>{
    let SliderImage = [Slider1,Slider2,Slider3]
    let OverlayData = [
        {Title: "PIZZA", Description: "WITH SEAFOOD"},
        {Title: "Mexican", Description: "CHICKEN"},
        {Title: "JAPANI", Description: "NODULES"},
    ]
    let [Slide,setSlider] = useState(0)
    let [Overlay,setOverlay] = useState(true)
    
    useEffect(()=>{
        let interval = setInterval(() => {
            setOverlay(false)
            setSlider((item)=>{return(item + 1) % SliderImage.length})            
            setOverlay(true)
        },5000);
        return () => clearInterval(interval)
    })

return(<>

                                            {/* Slider Section */}

<section className="relative overflow-hidden w-full h-90 md:h-151">

  {SliderImage.map((item, idx) => (
    <div key={idx} className={`absolute inset-0 w-full h-full transition-opacity duration-1000
        ${idx === Slide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
      
      <img src={item} className="w-full h-full object-cover" />

                                            {/* Overlay */}
      {idx === Slide && (
        <div className={`absolute inset-0 flex items-center justify-start text-white transition-opacity duration-1000
            ${Overlay ? "opacity-100" : "opacity-0"} `} >
          <div className="px-10 md:px-20">
            <h1 className="text-7xl font-bold mb-4 text-(--MAIN)
                        md:text-9xl md:font-bold md:mb-4 md:text-(--MAIN)"> {OverlayData[Slide].Title} </h1>
            <p className="text-4xl md:text-7xl"> {OverlayData[Slide].Description} </p>
            
          </div>
        </div> )}
    </div> ))}

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-20">
        {SliderImage.map((_, idx) => (
            <button key={idx} onClick={() => setSlider(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                ${idx === Slide ? "bg-(--MAIN) scale-125" : "bg-white"} `} />
        ))}
  </div>

</section>

                                            {/* About Section */}

<AboutRestorent />

                                            {/* Fast Delivery Section */}

<FastDelivery />

                                            {/* Menu Section */}

<section className="w-full flex items-center justify-center px-7 py-10 md:py-20 ">
    <img src={Menu1} className="rounded-lg"/>
</section>

                                            {/* Free Delivery Section */}

<FreeDelivery />

                                            {/* Chefs Section */}

<Chefs />

                                            {/* Partner Section */}

<Partner />

                                            {/* Image Section */}

<section className="flex flex-col gap-3 md:flex-row w-full py-10 px-3 md:px-10 justify-center items-center">
    <img src={img1} className="w-full md:w-1/4 rounded-lg cursor-pointer translate-y-0 hover:-translate-y-3" />
    <img src={img2} className="w-full md:w-1/4 rounded-lg cursor-pointer translate-y-0 hover:-translate-y-3" />
    <img src={img3} className="w-full md:w-1/4 rounded-lg cursor-pointer translate-y-0 hover:-translate-y-3" />
    <img src={img4} className="w-full md:w-1/4 rounded-lg cursor-pointer translate-y-0 hover:-translate-y-3" />
</section>

                                            {/* Testimonials Section */}

<Testimonials/>




















</>)}