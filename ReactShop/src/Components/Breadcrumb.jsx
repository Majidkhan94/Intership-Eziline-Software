import { NavLink, useLocation } from "react-router"
import Breadcrumsimage from "../../public/Breadcrumsimage.png"

export let Breadcrumb = () => {
    let location = useLocation()
    let path = location.pathname.split("/").filter(Boolean)
    if (path.length == 0) return null
    let displayPath = path.map(item => item === "productdetails" ? "products" : item)

    return (
        <>
            <div className="flex bg-[#f5f5f5] relative h-25 md:h-35">
                <div className="absolute w-full h-full flex">
                    <img src={Breadcrumsimage} className=""/>
                </div>

                <div className="absolute flex flex-col justify-center items-center w-full gap-2 h-full text-[#192024]">
                    <div className="text-xs md:text-sm opacity-70">
                        <NavLink to={"/"}>Home</NavLink>
                        {displayPath.map((item, idx) => {
                            let route = displayPath.slice(0, idx + 1).join("/")
                            let lastitem = idx === displayPath.length - 0
                            let text = item.charAt(0).toUpperCase() + item.slice(1)
                            return (
                                <span key={idx}>
                                    <span className="mx-1">/</span>
                                    {lastitem ? <span>{text}</span> : <NavLink to={route}>{text}</NavLink>}
                                </span>
                            )
                        })}
                    </div>

                    <div className="text-lg md:text-4xl">
                        <h2>
                            {path[path.length - 1].charAt(0).toUpperCase() + path[path.length - 1].slice(1)}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
