import bgHeader from "../../public/bgHeader.jpg"
import { Button } from "../Elements/Button"
export let Contacts = ()=>{return(<>


<section className="w-full h-170 md:h-150 flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10 md:p-20">
        <h1 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-cover"
            style={{ backgroundImage: `url(${bgHeader})` }} > Get in Touch </h1>
            <form className="w-full flex flex-col gap-5 pt-10">
                <input type="text" placeholder="Full Name" className="bg-white p-3 rounded-lg w-full" />
                <input type="text" placeholder="Emial" className="bg-white p-3 rounded-lg w-full" />
                <textarea type="text" cols={3} rows={4} placeholder="Message" className="bg-white p-3 rounded-lg w-full"/>
                <span className="pt-3">
                    <Button text="Submit" className="font-bold px-20"/>
                </span>
            </form>
    </div>


    <div className="w-full h-full md:w-1/2 flex justify-center items-center">
    
    <div className="flex flex-col gap-y-3 md:gap-y-5 justify-center">
    <div className="flex gap-3">
        <span className="text-(--MAIN) font-bold text-xs md:text-lg">Address:</span><p className="text-gray-500 text-xs md:text-lg">267 Park Avenue New York, NY 90210</p>
    </div>
    <div className="flex gap-3">
        <span className="text-(--MAIN) font-bold text-xs md:text-lg">Email:</span><p className="text-gray-500 text-xs md:text-lg">Exampleemail@gmail.com</p>
    </div>
    <div className="flex gap-3">
        <span className="text-(--MAIN) font-bold  text-xs md:text-lg">Phone:</span><p className="text-gray-500 text-xs md:text-lg">+92XXXXXXXXXX</p>
    </div>
    </div>
    </div>
    
</section>


</>)}