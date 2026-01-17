import { useEffect, useState } from "react";
import Home1 from "../../public/Images/Home1.jpg";
import Home2 from "../../public/Images/Home2.jpg";
import Home3 from "../../public/Images/Home3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Brand1 from "../../public/Images/Brand1.png"
import Brand2 from "../../public/Images/Brand2.png"
import Brand3 from "../../public/Images/Brand3.png"
import Brand4 from "../../public/Images/Brand4.png"
import Brand5 from "../../public/Images/Brand5.png"
import Brand6 from "../../public/Images/Brand6.png"




export let Home = () => {

    // slider
  
    const slider = [
  {
    img: Home1,
    heading: "Discover New Horizons",
    description: "Experience adventures like never before.",
  },
  {
    img: Home2,
    heading: "Innovative Solutions",
    description: "Empowering your business with solutions.",
  },
  {
    img: Home3,
    heading: "Join the Community",
    description: "Connect and grow with passionate people.",
  },
];

  const [current, setCurrent] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setOverlayVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slider.length);
        setOverlayVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slider.length]);

//  Brands
let Brands = [Brand1,Brand2,Brand3,Brand4,Brand5,Brand6]





  return (
    <section id="home">
    <div className="relative w-full h-70 md:h-151 overflow-hidden">  
      {/* Images */}
      
      {slider.map((slide, idx) => (
        <img
          key={idx}
          src={slide.img}
           className={`absolute top-0 left-0 w-full h-80 md:h-full object-cover transition-opacity duration-700
            ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}

      {/* Overlay */}
      <div
        className={`px-12 absolute top-8 z-20 flex flex-col gap-2 h-full justify-center items-center w-full transition-all duration-700 ease-out
                    md:px-20 md:top-8
          ${overlayVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}
      >
        <h2 className="text-white text-xs md:text-2xl">
          {slider[current].heading}
        </h2>
        <p className="text-center text-white font-bold text-2xl leading-7
                      md:font-bold md:text-8xl md:leading-25">
          {slider[current].description}
        </p>
       
      </div>

      {/* Arrows */}
      <div className="absolute top-39 left-0 z-30 w-full px-2 flex justify-between
                    md:top-80 md:px-5">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slider.length) % slider.length)
          }
          className="bg-(--COLOR) rounded-2xl p-2 text-white text-sm cursor-pointer"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slider.length)}
          className="bg-(--COLOR) rounded-2xl p-2 text-white text-sm cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
    
    <div className="w-full bg-(--BG) p-7 md:p-20">
        <div className="md:mb-20 bg-white rounded-xl flex flex-col justify-center items-center py-20 px-5 md:px-60 gap-3 md:gap-7">
            <span className="text-(--COLOR) tracking-widest">WHAT WE DO</span>
            <h2 className="text-center font-bold text-2xl md:text-4xl md:leading-12">We Provide Awesome Digital Solutions With a Great Attentions.</h2>
            <p className="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus, eligendi necessitatibus temporibus placeat nemo deleniti unde libero incidunt impedit iusto iure fuga sunt magni alias suscipit. Recusandae porro necessitatibus ducimus quos consequuntur assumenda, dolor sequi. Cum veritatis laborum mollitia.</p>
        </div>
        <div className="flex flex-col md:flex-row">
            {Brands.map((brand, idx)=>{
                return(
                    <div className="">
                    <img key={idx} src={brand} />
                    </div>

                )
            })}
        </div>
    </div>
    





















    </section>
  );
};
