import Menu2 from "../../public/Menu/Menu2.png"
import Menu3 from "../../public/Menu/Menu3.png"
import Menu4 from "../../public/Menu/Menu4.png"
import Menu5 from "../../public/Menu/Menu5.png"
import Menu6 from "../../public/Menu/Menu6.png"
import Menu7 from "../../public/Menu/Menu7.png"

export let Menu = ()=>{return(<>

<section>
  <div className="flex flex-col md:flex-row justify-center items-center h-full md:h-150 p-3 gap-y-3">
    
    <div className="h-full w-full md:w-1/3 shrink-0 flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <img src={Menu2} className="w-100 rounded-2xl" />
    </div>

    <div className="h-full w-full md:w-1/3 shrink-0 flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <img src={Menu3} className="w-100 rounded-2xl" />
    </div>

    <div className="h-full w-full md:w-1/3 shrink-0 flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <img src={Menu4} className="w-100 rounded-2xl" />
    </div>

  </div>

  <div className="flex flex-col md:flex-row justify-center items-center h-full md:h-150 p-3 gap-y-3">
    
    <div className="h-full w-full md:w-1/3 shrink-0 flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <img src={Menu5} className="w-100 rounded-2xl" />
    </div>

    <div className="h-full w-full md:w-1/3 shrink-0 flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <img src={Menu6} className="w-100 rounded-2xl" />
    </div>

    <div className="h-full w-full md:w-1/3 shrink-0 flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <img src={Menu7} className="w-100 rounded-2xl" />
    </div>

  </div>
</section>

</>)}