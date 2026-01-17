import { Button } from "../Exportfiles"
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";


export let Contactus = () =>{
    let location = 
    [
        {icon : <MdEmail />,         Title : "Email",    Description : "Example@gmail.com"},
        {icon : <FaSquarePhone />,   Title : "Phone",    Description : "+9234567890"},
        {icon : <IoLocationSharp />, Title : "Location", Description : "example road near rwp"}
        
    ]
    return(<>
    <section className="flex flex-col justify-center items-center md:pt-10 gap-5">
        <div className="py-10 md:py-0">
            <form className="bg-[#f5f5f5] text-[#192024] w-100 p-10 rounded-lg flex gap-5 flex-col">
                <h1 className="text-center text-2xl font-medium">Connect with us</h1>
                <input type="text" placeholder="Full name:" className="w-full p-2 bg-white" />
                <input type="email" placeholder="Email:" className="w-full p-2 bg-white" />
                <textarea rows="3" cols="51" placeholder="Enter your message" className="w-full p-2 bg-white" />
                <Button text="Submit"/>
            </form>
        </div>

        <div className="flex flex-col w-full justify-center items-center py-5 bg-[#f5f5f5]  
                    md:flex-row md:py-10 md:gap-30">
        {location.map((item, idx)=>{
            return(
            <div key={idx} className="flex flex-col justify-center items-center py-3">
            <span className="text-4xl text-[#ff9500]">{item.icon}</span>
             <h1 className="text-lg">{item.Title}</h1>
              <p className="text-sm">{item.Description}</p> 
            </div>
            )})}
        </div>

    </section>
    </>)}