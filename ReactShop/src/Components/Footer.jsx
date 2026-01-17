import { FooterNav } from "../Exportfiles"
import Logo from "../../public/Logo.png"
import { NavLink } from "react-router"
import { FaFacebook } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"

export let Footer = () => {
    return (
        <>
            <footer className="bg-[#192024] hidden sm:block">
                <section className="flex flex-col items-center py-15 gap-10 border-b border-[#ff9500]/40">
                    <NavLink to={"/"}>
                        <img src={Logo} className="w-full" />
                    </NavLink>
                    <nav>
                        <ul className="flex gap-10">
                            <FooterNav />
                        </ul>
                    </nav>
                    <div className="text-[#ff9500] font-medium flex gap-10">
                        <NavLink to={"https://www.facebook.com/"}>
                            <FaFacebook />
                        </NavLink>
                        <NavLink to={"https://x.com/signup"}>
                            <FaSquareXTwitter />
                        </NavLink>
                        <NavLink to={"https://www.instagram.com/"}>
                            <FaInstagramSquare />
                        </NavLink>
                    </div>
                </section>
                <section className="text-center text-white text-sm py-3">
                    Copyright© | All Right Reserved | Design By MajidKhan
                </section>
            </footer>

            <footer className="bg-[#192024] block sm:hidden">
                <section className="flex flex-col items-center py-10 gap-5 md:gap-10 border-b border-[#ff9500]/40">
                    <NavLink to={"/"}>
                        <img src={Logo} className="w-full" />
                    </NavLink>
                    <nav>
                        <ul className="flex flex-col gap-5 items-center">
                            <FooterNav />
                        </ul>
                    </nav>
                    <div className="text-[#ff9500] font-medium flex gap-5">
                        <NavLink to={"https://www.facebook.com/"}>
                            <FaFacebook />
                        </NavLink>
                        <NavLink to={"https://x.com/signup"}>
                            <FaSquareXTwitter />
                        </NavLink>
                        <NavLink to={"https://www.instagram.com/"}>
                            <FaInstagramSquare />
                        </NavLink>
                    </div>
                </section>
                <section className="text-center text-white text-sm py-3">
                    Copyright© | All Right Reserved | Design By MajidKhan
                </section>
            </footer>
        </>
    )
}
