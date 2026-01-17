import Logo from "../../public/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { smoothScroll } from "../smoothScroll";

export let Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-(--COLOR) h-20 flex justify-between items-center px-10 md:px-20">
      <img
        src={Logo}
        className="h-full cursor-pointer"
        onClick={() => smoothScroll("home", 1500)}
      />

      {/* DESKTOP */}
      <nav className="hidden md:block">
        <ul className="flex gap-7 text-white font-medium">
          {links.map((item) => (
            <li
              key={item.id}
              onClick={() => smoothScroll(item.id, 1500)}
              className={`cursor-pointer transition-colors
                hover:text-(--HOVER)
                ${activeSection === item.id ? "text-(--HOVER) font-bold" : ""}
              `}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE */}
      <nav className="block md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white"
        >
          <GiHamburgerMenu />
        </button>

        <div
          className={`absolute left-0 w-full bg-(--HOVER) py-10 transition-all duration-700
            ${open ? "top-20 opacity-100" : "-top-100 opacity-0"}`}
        >
          <ul className="flex flex-col gap-4 text-white items-center">
            {links.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  smoothScroll(item.id, 1500);
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
