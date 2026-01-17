import Logo from "../../public/Logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";




export let Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full pt-10 pb-4  px-5 md:px-20 flex flex-col gap-4">

  {/* Top section: Logo, Contact, Social */}
  <div className="flex flex-col md:flex-row justify-between pb-10 gap-8">

    {/* Logo and description */}
    <div className="flex flex-col gap-3 md:w-1/3 items-center md:items-start text-center md:text-left">
      <img src={Logo} className="w-20 h-20" alt="Logo" />
      <p className="text-gray-400 md:text-sm">
        Providing quality content and modern solutions for your needs. Stay connected with us!
      </p>
    </div>

    {/* Navigation links */}
    <div className="flex flex-col gap-2 md:w-1/3 items-center md:items-start text-center md:text-left">
      <h2 className="font-medium text-lg pb-2">Get in Touch</h2>
      <p className="text-gray-400 md:text-sm">Phone: +921888155445</p>
      <p className="text-gray-400 md:text-sm">Email: examplesupport@gmail.com</p>
      <p className="text-gray-400 md:text-sm">Fax: +929184084694</p>
    </div>

    {/* Social icons */}
    <div className="flex flex-col gap-2 md:w-1/3 items-center md:items-start text-center md:text-left">
      <h2 className="font-medium text-lg pb-2">Follow Us</h2>
      <div className="flex gap-4 mt-2">
        <FaFacebook />
        <FaSquareXTwitter />
        <FaInstagramSquare />
      </div>
    </div>

  </div>

  <hr className="border-gray-700 w-full" />

  {/* Bottom section */}
  <div className="text-center md:text-left text-gray-400 md:text-sm">
    <p>Copyright© 2026 All Right Reserved | Created By Majid Khan</p>
  </div>

</footer>

  );
};
