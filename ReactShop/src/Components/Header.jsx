import { HeaderNav } from "../Exportfiles"
import Logo from "../../public/Logo.png"
import { NavLink } from "react-router"
import { FaCartShopping } from "react-icons/fa6"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useSelector } from "react-redux"

export let Header = () => {
    let [open, Setopen] = useState(false)
    let { Totalquantity } = useSelector((state) => state.Cart)

    return (
        <>
            <header className="bg-[#192024] hidden md:block">
                <section className="flex justify-between items-center h-20 px-30 md:sticky">
                    <NavLink to={"/"}>
                        <img src={Logo} className="w-20" />
                    </NavLink>
                    <nav>
                        <ul className="flex gap-10">
                            <HeaderNav />
                        </ul>
                    </nav>
                    <div className="relative top-0 left-0">
                        <div>
                            <NavLink to={"/cart"} className="text-[#ff9500] font-medium">
                                <FaCartShopping />
                            </NavLink>
                        </div>
                        <div className="absolute bottom-2 left-2">
                            <span className="text-white bg-transparent text-xs font-bold rounded-full p-1">
                                {Totalquantity}
                            </span>
                        </div>
                    </div>
                </section>
            </header>

            <header className="bg-[#192024] sm:hidden">
                <section className="flex items-center justify-between px-10 py-4">
                    <NavLink to="/">
                        <img src={Logo} className="w-15 md:w-10" alt="Logo" />
                    </NavLink>
                    <button
                        onClick={() => Setopen(!open)}
                        className="text-[#ff9500] text-2xl focus:outline-none"
                    >
                        <RxHamburgerMenu />
                    </button>
                </section>

                {open && (
                    <nav className="bg-[#192024] border-t border-white/10">
                        <ul className="flex flex-col items-center gap-6 py-6 text-[#ff9500] font-medium">
                            <HeaderNav />
                            <div className="relative top-0 left-0 z-10">
                                <div>
                                    <NavLink to={"/cart"} className="text-[#ff9500] font-medium">
                                        <FaCartShopping />
                                    </NavLink>
                                </div>
                                <div className="absolute bottom-2 left-2">
                                    <span className="text-white bg-transparent text-xs font-bold rounded-full p-1">
                                        {Totalquantity}
                                    </span>
                                </div>
                            </div>
                        </ul>
                    </nav>
                )}
            </header>
        </>
    )
}
