import {AboutRestorent} from "../Sections/AboutRestorent"
import bgHeader from "../../public/bgHeader.jpg"
import About1 from "../../public/AboutUs/About1.jpg"
import About2 from "../../public/AboutUs/About2.jpg"
import About3 from "../../public/AboutUs/About3.jpg"
import {Chefs} from "../Sections/Chefs"
import {Partner} from "../Sections/Partner"






export let About = ()=>{

    return(<>

                                {/* AboutRestorent */}
<AboutRestorent />
                                {/* Our Story */}
<section className="bg-gray-50">
     <h1 className="text-4xl md:text-5xl text-center font-light p-10 md:p-15 text-transparent bg-clip-text bg-cover"
            style={{ backgroundImage: `url(${bgHeader})` }} > Our Story </h1>

<div className="w-full flex flex-col justify-center items-center px-3 md:px-15">
    <span className="bg-(--MAIN) text-2xl rounded-3xl text-white px-10 py-2 font-light">2014</span>
        <div className="flex flex-col md:flex-row">
            <div className="w-full flex justify-center items-center py-5 md:w-1/2 md:justify-end md:items-end md:border-r md:px-20 md:py-10 md:border-gray-300"><img src={About1}/></div>
                <div className="w-full flex flex-col justify-center items-center px-5 md:w-1/2 md:px-20">
                    <h2 className="text-3xl">Idea</h2>
                    <p className="text-center text-sm pt-5 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur, quisquam voluptates architecto nam, quaerat dicta harum exercitationem, nulla debitis optio dolorum quia</p>
                </div>
        </div>
</div>

<div className="w-full flex flex-col justify-center items-center px-3 md:px-15 py-10 md:py-0">
    <span className="bg-(--MAIN) text-2xl rounded-3xl text-white px-10 py-2 font-light">2013</span>
        <div className="flex flex-col md:flex-row">
            <div className="w-full flex justify-center items-center py-5 md:w-1/2 md:justify-end md:items-end md:border-r md:px-20 md:py-10 md:border-gray-300"><img src={About2}/></div>
                <div className="w-full flex flex-col justify-center items-center px-5 md:w-1/2 md:px-20">
                    <h2 className="text-3xl">Opening</h2>
                    <p className="text-center text-sm pt-5 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur, quisquam voluptates architecto nam, quaerat dicta harum exercitationem, nulla debitis optio dolorum quia</p>
                </div>
        </div>
</div>

<div className="w-full flex flex-col justify-center items-center px-3 md:px-15 py-10 md:py-0">
    <span className="bg-(--MAIN) text-2xl rounded-3xl text-white px-10 py-2 font-light">2019</span>
        <div className="flex flex-col md:flex-row">
            <div className="w-full flex justify-center items-center py-5 md:w-1/2 md:justify-end md:items-end md:border-r md:px-20 md:py-10 md:border-gray-300"><img src={About3}/></div>
                <div className="w-full flex flex-col justify-center items-center px-5 md:w-1/2 md:px-20">
                    <h2 className="text-3xl">Today</h2>
                    <p className="text-center text-sm pt-5 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur, quisquam voluptates architecto nam, quaerat dicta harum exercitationem, nulla debitis optio dolorum quia</p>
                </div>
        </div>
</div>

</section>

                                {/* Chefs */}
<Chefs />

                                {/* Partner */}
<Partner />




</>)}