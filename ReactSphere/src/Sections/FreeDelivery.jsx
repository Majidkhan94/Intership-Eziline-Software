import FreeDeliveryimg from "../../public/FreeDeliveryimg.png"
import { Button } from "../index"
export let FreeDelivery = ()=>{return(<>

<section className="bg-cover flex flex-col justify-center items-center py-15 md:py-38"
style={{backgroundImage: `url(${FreeDeliveryimg})`}}>

<span className="text-(--MAIN) font-light text-4xl md:text-7xl">Free Delivery</span>
    <h2 className="text-white font-bold text-5xl md:text-9xl pb-5">Sandwich Day</h2>
<Button to="/contacts" text="CONTACT US" className="font-bold text-2xl " />

</section>

</>)}