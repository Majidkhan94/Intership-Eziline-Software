import { useEffect, useState } from "react"
import SliderData from "../Jsonfiles/SliderData.json"
import { NavLink } from "react-router"
import { Button } from "../Exportfiles"
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

export let Slider = () => {
    let [Current, SetCurrent] = useState(0)
    let [Detials, SetDetials] = useState(true)

    useEffect(() => {
        let interval = setInterval(() => {
            SetDetials(false)
            setTimeout(() => {
                SetCurrent((item) => (item + 1) % SliderData.length)
                SetDetials(true)
            }, 500)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="w-full relative overflow-hidden h-50 md:h-130">
                {SliderData.map((Slide, idx) => (
                    <img
                        key={Slide.id}
                        src={Slide.SliderImage}
                        className={`w-full h-50 md:h-130 absolute top-0 left-0 object-cover transition-opacity duration-3000
                        ${idx === Current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    />
                ))}

                <div
                    className={`z-10 w-60 absolute top-10 left-5 flex flex-col gap-1 transition-all duration-3000 ease-out
                        md:w-145 md:top-60 md:left-38
                        ${Detials ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-400"}`}
                >
                    <h2 className="text-[#192024] text-xs md:text-lg">
                        {SliderData[Current].Heading}
                    </h2>
                    <h2
                        className="text-[#192024] font-medium text-sm leading-6
                        md:font-medium md:text-3xl md:leading-10 md:pb-2"
                    >
                        {SliderData[Current].Description}
                    </h2>
                    <NavLink to={SliderData[Current].ButtonLink}>
                        <Button text={SliderData[Current].ButtonText} />
                    </NavLink>
                </div>

                <div className="absolute top-40 left-0 z-30 w-full px-2 hidden md:top-75 md:px-5 md:flex md:justify-between">
                    <button
                        onClick={() => {
                            SetCurrent((item) => (item - 1 + SliderData.length) % SliderData.length)
                        }}
                        className="bg-[#ff9500] rounded-2xl p-2 text-white text-sm cursor-pointer"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={() => {
                            SetCurrent((item) => (item + 1) % SliderData.length)
                        }}
                        className="bg-[#ff9500] rounded-2xl p-2 text-white text-sm cursor-pointer"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </>
    )
}
