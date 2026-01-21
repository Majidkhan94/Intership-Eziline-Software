import { useEffect, useState } from "react";
import Slide1 from "../../public/Slide/Slide1.png";
import Slide2 from "../../public/Slide/Slide2.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export const Slider = () => {

  let Slide = [Slide1, Slide2];
  let SlideData = [
    {
      Title: "FOR SALE",
      Description: "Lucerne Blvd",
      Price: "$2,265,500",
      Buttontext: "SEE DETAILS",
    },
    {
      Title: "FOR SALE",
      Description: "Bernando Blvd",
      Price: "$3,455,700",
      Buttontext: "SEE DETAILS",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setOverlayVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % Slide.length);
        setOverlayVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [Slide.length]);

  return (
    <>

    <section className="z-0 -top-16 md:-top-17 w-full h-82 md:h-133">

      <div className="w-full h-80 md:h-full overflow-hidden">
        
        {/* SLIDER IMAGES */}
        {Slide.map((item, idx) => (
          <img
            key={idx}
            src={item}
            className={`absolute top-0 left-0 w-full h-100 md:h-full object-cover transition-opacity duration-700 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* DATA OVERLAY (MIDDLE) */}
        {overlayVisible && (
          <div className="absolute inset-0 z-20 flex items-center h-100 md:h-full justify-center text-white text-center flex-col">
              <h4 className="text-sm tracking-widest bg-(--GREEN) p-2 rounded">
                {SlideData[current].Title}
              </h4>
              <h2 className="text-4xl md:text-7xl font-light my-2">
                {SlideData[current].Description}
              </h2>
              <p className="text-2xl md:text-3xl mb-4 text-(--GREEN) font-semibold">
                {SlideData[current].Price}
              </p>
              <button className="border px-5 py-2 hover:bg-white hover:text-black transition md:mt-7 cursor-pointer">
                {SlideData[current].Buttontext}
              </button>
          </div>
        )}


<div className="absolute top-0 inset-0 z-10 flex items-center justify-between h-100 md:h-full px-4 md:px-8">
  <button
    onClick={() =>
      setCurrent((prev) => (prev - 1 + Slide.length) % Slide.length)
    }
    className="bg-(--COLOR) rounded-full p-3 text-white cursor-pointer hover:scale-110 transition"
  >
    <FaArrowLeft />
  </button>

  <button
    onClick={() =>
      setCurrent((prev) => (prev + 1) % Slide.length)
    }
    className="bg-(--COLOR) rounded-full p-3 text-white cursor-pointer hover:scale-110 transition"
  >
    <FaArrowRight />
  </button>
</div>


      </div>
      
</section>

















    </>
  );
};
