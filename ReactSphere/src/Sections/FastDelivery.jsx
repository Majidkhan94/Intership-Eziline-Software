import { CiClock2 } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";
import { PiChefHatLight } from "react-icons/pi";
import { LiaUtensilsSolid } from "react-icons/lia";

export let FastDelivery = ()=>{
    
    let Data = [
        {
            icon        : CiClock2,
            Title       : "Fast Delivery",
            Description : "Everything you order at Restoral will be quickly delivered to your door."
        },
        {
            icon        : PiBowlFoodLight,
            Title       : "Fresh Food",
            Description : "We use only the best ingredients to cook the tasty fresh food for you."
        },
        {
            icon        : PiChefHatLight,
            Title       : "Experienced Chefs",
            Description : "Our staff consists of chefs and cooks with years of experience."
        },
        {
            icon        : LiaUtensilsSolid,
            Title       : "A Variety Of Dishes",
            Description : "In our menu you’ll find a wide variety of dishes, desserts, and drinks."
        }
    ]
    
    return(<>
    
    <section className="bg-[#f5f5f5] flex flex-col md:flex-row p-15 gap-5">
      {Data.map((item, idx) => {
        const Icon = item.icon;

        return (
          <div key={idx} className="flex flex-col justify-center items-center">
              <Icon className="text-5xl text-(--MAIN)" />
              <h2 className="text-2xl text-center font-light py-3">{item.Title}</h2>
              <p className="text-gray-500 text-center text-xs px-6 md:px-8">{item.Description}</p>
          </div>
    );})}
</section>
</>)}