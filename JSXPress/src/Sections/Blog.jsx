import blog1 from "../../public/Images/blog1.png"
import blog2 from "../../public/Images/blog2.png"
import blog3 from "../../public/Images/blog3.png"
import blog4 from "../../public/Images/blog4.png"
export let Blog = ()=>{

    return(<>
    <section id="blog" className="bg-(--BG) mt-20">

<div className="h-40 md:h-50 flex flex-col justify-center items-center gap-2 md:gap-5">
            <span className="text-lg md:text-lg text-(--COLOR)">FROM BLOG</span>
            <h2 className="text-2xl md:text-5xl font-medium">Our Updated News</h2>
</div>


<div className="flex flex-col md:flex-row h-200 w-full">
  {/* CARD */}
  <div
    className="relative w-full md:w-1/4 h-full bg-cover bg-center flex items-center justify-center py-15 md:py-0 px-6"
    style={{ backgroundImage: `url(${blog1})` }}>
    <div className="relative z-10 text-center flex flex-col gap-3">
      <h2 className="text-white text-lg font-medium leading-snug">
        How to Choose an eCommerce Site for a Fashion Startup
      </h2>
      <span className="text-white text-sm">March 16, 2016</span>
    </div>
  </div>

  {/* CARD */}
  <div
    className="relative w-full md:w-1/4 h-full bg-cover bg-center flex items-center justify-center py-15 md:py-0 px-6"
    style={{ backgroundImage: `url(${blog2})` }}>
    <div className="relative z-10 text-center flex flex-col gap-3">
      <h2 className="text-white text-lg font-medium leading-snug">
        Using WordPress Admin Filters to Easily Find Custom Content
      </h2>
      <span className="text-white text-sm">March 16, 2016</span>
    </div>
  </div>

  {/* CARD */}
  <div
    className="relative w-full md:w-1/4 h-full bg-cover bg-center flex items-center justify-center py-15 md:py-0 px-6"
    style={{ backgroundImage: `url(${blog3})` }}>
    <div className="relative z-10 text-center flex flex-col gap-3">
      <h2 className="text-white text-lg font-medium leading-snug">
        How to Tool Your Ecommerce Business for Growth
      </h2>
      <span className="text-white text-sm">March 16, 2016</span>
    </div>
  </div>

  {/* CARD */}
  <div
    className="relative w-full md:w-1/4 h-full bg-cover bg-center flex items-center justify-center py-15 md:py-0 px-6"
    style={{ backgroundImage: `url(${blog4})` }}>
    <div className="relative z-10 text-center flex flex-col gap-3">
      <h2 className="text-white text-lg font-medium leading-snug">
        10 Essential Tips for Designing Mobile eCommerce Apps
      </h2>
      <span className="text-white text-sm">March 16, 2016</span>
    </div>
  </div>
</div>


    </section>
    </>)}



