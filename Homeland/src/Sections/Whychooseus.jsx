import { Heading } from "../ExternalFiles/index"
import { FaWarehouse } from "react-icons/fa";
import { BsFillHouseLockFill } from "react-icons/bs";
import { PiSecurityCameraFill } from "react-icons/pi";

export const Whychooseus = ()=>{


  let Details = [
    { icon: <FaWarehouse />,
      Title: "Research Subburbs", 
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis.",
      LinkText: "READ MORE"
    },
    { icon: <BsFillHouseLockFill />,
      Title: "Research Subburbs", 
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis.",
      LinkText: "READ MORE"
    },
    { icon: <PiSecurityCameraFill />,
      Title: "Research Subburbs", 
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis.",
      LinkText: "READ MORE"
    },
  ]

  return(<>
  
  <section className="py-15 px-8 md:p-30">
  <Heading text="Why Choose Us?"/>
    
    <div className="flex flex-col md:flex-row justify-center gap-5">
  {Details.map((item, idx) => {
    return (
      <div key={idx} className="flex flex-col items-center text-center max-w-xs transition-all hover:transform hover:-translate-y-1" >
        
        <span className="text-4xl mb-6 text-(--GREEN)"> {item.icon} </span>
          <h2 className="text-xl text-gray-800 mb-4 tracking-tight">
          {item.Title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {item.Description}
        </p>

        {/* Read More Link */}
        <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:text-(--GREEN) transition-colors">
          {item.LinkText}
        </span >
      </div>
    );
  })}
</div>
    </section>
  </>)
}