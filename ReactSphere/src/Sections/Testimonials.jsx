import bgHeader from "../../public/bgHeader.jpg"
import Testimonials1 from "../../public/Testimonials/Testimonials1.jpg";
import Testimonials2 from "../../public/Testimonials/Testimonials2.jpg";
import Testimonials3 from "../../public/Testimonials/Testimonials3.jpg";
import { useState, useEffect } from "react";

export let Testimonials = () => {
  let  [current, setCurrent] = useState(0);
  let  [itemsPerSlide, setItemsPerSlide] = useState(1);

 let Data = [
    { Img: Testimonials1, Title: "Emily Wilson", Description: "Anytime I am driving through San Diego, I usually stop by Restoral. They have very delicious burgers and fries." },
    { Img: Testimonials2, Title: "Ann Carlson", Description: "Anytime I am driving through San Diego, I usually stop by Restoral. They have very delicious burgers and fries." },
    { Img: Testimonials3, Title: "John Smith", Description: "Anytime I am driving through San Diego, I usually stop by Restoral. They have very delicious burgers and fries." },
    { Img: Testimonials1, Title: "Emily Wilson", Description: "Anytime I am driving through San Diego, I usually stop by Restoral. They have very delicious burgers and fries." },
    { Img: Testimonials2, Title: "Ann Carlson", Description: "Anytime I am driving through San Diego, I usually stop by Restoral. They have very delicious burgers and fries." },
    { Img: Testimonials3, Title: "John Smith", Description: "Anytime I am driving through San Diego, I usually stop by Restoral. They have very delicious burgers and fries." },
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
        style={{ backgroundImage: `url(${bgHeader})` }} >Our Testimonials</h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-700"
             style={{ transform: `translateX(-${current * 100}%)` }}>
          {Data.map((item, idx) => (
            <div key={idx} className=" shrink-0 w-full md:w-1/3 p-2 flex flex-col justify-center items-center">
              <img src={item.Img} className="rounded-full w-40 md:w-48" />
              <span className="flex flex-col gap-2 justify-center items-center py-6">
                <h2 className="text-2xl md:text-3xl text-(--MAIN)"> {item.Title} </h2>
                <p className="text-lg text-gray-500 text-center">{item.Description}</p>
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
