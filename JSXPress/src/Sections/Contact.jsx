import CHOOSE1 from "../../public/Images/CHOOSE1.png"
import CHOOSE2 from "../../public/Images/CHOOSE2.png"
import CHOOSE3 from "../../public/Images/CHOOSE3.png"
import CHOOSE4 from "../../public/Images/CHOOSE4.png"
import CHOOSE5 from "../../public/Images/CHOOSE5.png"
import CHOOSE6 from "../../public/Images/CHOOSE6.png"


export let Contact = ()=>{
    let data = [
        {image: CHOOSE1, titel:"FULLY RESPONSIVE",description:"This theme will save you a lot of time. Packed with amazing features."},
        {image: CHOOSE2, titel:"PERFECT CODING",description:"This theme will save you a lot of time. Packed with amazing features."},
        {image: CHOOSE3, titel:"FAST LOADING",description:"This theme will save you a lot of time. Packed with amazing features."},
        {image: CHOOSE4, titel:"AMAZING FEATURES",description:"This theme will save you a lot of time. Packed with amazing features."},
        {image: CHOOSE5, titel:"5 STARS SUPPORT",description:"This theme will save you a lot of time. Packed with amazing features."},
        {image: CHOOSE6, titel:"EASY TO CUSTOMIZE",description:"This theme will save you a lot of time. Packed with amazing features."},
    ]
    return(<>
   <section id="contact" className="py-20 bg-(--BG)">
  {/* Heading */}
  <div className="flex flex-col justify-center items-center gap-2 md:gap-5 mb-16">
    <span className="text-lg text-(--COLOR)">OUR BENEFITS</span>
    <h2 className="text-2xl md:text-5xl font-medium">Why Choose Us</h2>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-10">
    
    {/* LEFT : FORM */}
    <div className="w-full md:w-1/2 bg-white rounded-3xl p-8 shadow-lg">
    <h2 className="text-center py-5 font-medium text-3xl">GET IN TOUCH</h2>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-(--COLOR)"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-(--COLOR)"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-(--COLOR)"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-(--COLOR)"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-(--COLOR)"
        ></textarea>

        <button className="bg-(--COLOR) text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </div>

    {/* RIGHT : BENEFITS */}
    <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-5">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-md"
        >
          <img src={item.image} className="w-12 h-12 md:w-6 md:h-6" />
          
          <div className="flex flex-col">
          <h3 className="font-medium text-lg tracking-wider">{item.titel}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

    </>)}