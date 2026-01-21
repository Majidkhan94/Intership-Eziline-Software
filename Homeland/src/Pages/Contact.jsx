import { Hamburger,Ouragents } from "../index"

export const Contact = ()=>{

  let LABEL = ({text})=>{
    return(<>
    <label className="font-bold text-gray-500 text-sm">{text}</label>
    </>)}

    let INPUT = ({type,placeholder})=>{
    return(<>
    <input type={type} placeholder={placeholder} className="border border-gray-300 p-2 rounded-sm" />
    </>)}
  
  
  
  
  return(<>
  
 <Hamburger text = "CONTACT US"/>

 <section className="flex flex-col md:flex-row justify-center gap-6 py-3 md:py-10 px-5 md:px-24">

  <div className="w-full md:w-[60%] bg-white p-4 md:p-8 border border-gray-100">
    <form className="flex flex-col gap-4">
      
      <div className="flex flex-col gap-2">
        <LABEL text="Full Name"/>
        <INPUT type={"text"} placeholder={"Full Name"}/>
      </div>

      <div className="flex flex-col gap-2">
        <LABEL text="Email"/>
        <INPUT type={"email"} placeholder={"Email"}/>
      </div>

      <div className="flex flex-col gap-2">
        <LABEL text="Subject"/>
        <INPUT type={"text"} placeholder={"Subject"}/>
      </div>

      <div className="flex flex-col gap-2">
        <LABEL text={"Message"}/>
          <textarea rows="3" placeholder="Say hello to us" className="border border-gray-300 p-2 rounded-sm"></textarea>
      </div>

      <button className="bg-(--GREEN) text-white font-bold py-3 px-8 w-fit cursor-pointer">
        Send Message
      </button>
    </form>
  </div>


  <div className="w-full md:w-[30%] flex flex-col gap-8">
    
    <div>
      <h3 className="font-bold text-gray-500 text-lg mb-4 uppercase tracking-widest">Contact Info</h3>
      
      <div className="mb-5">
        <p className="font-bold text-gray-500 mb-1">Address</p>
        <p className="text-gray-700 leading-relaxed">
          203 Fake St. Mountain View, San Francisco, California, USA
        </p>
      </div>

      <div className="mb-5">
        <p className="font-bold text-gray-500 mb-1">Phone</p>
        <p className="text-gray-700 font-medium">+1 232 3235 324</p>
      </div>

      <div>
        <p className="font-bold text-gray-500 mb-1">Email Address</p>
        <p className="text-gray-700 font-medium">youremail@domain.com</p>
      </div>
    </div>

  </div>

</section>
<Ouragents/>

  </>)}