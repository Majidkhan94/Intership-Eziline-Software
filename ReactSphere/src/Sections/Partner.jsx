import bgHeader from "../../public/bgHeader.jpg"
import Partner1 from "../../public/Partner/Partner1.png"
import Partner2 from "../../public/Partner/Partner2.png"
import Partner3 from "../../public/Partner/Partner3.png"
import Partner4 from "../../public/Partner/Partner4.png"


export let Partner = () => {

    let Data = [Partner1,Partner2,Partner3,Partner4]

    return(<>
    <section className="pb-20">
      <div className="flex flex-col pb-5 px-10 md:px-100">
        <h1 className="text-4xl md:text-5xl text-center font-light py-5 text-transparent bg-clip-text bg-cover"
            style={{ backgroundImage: `url(${bgHeader})` }} > Our Partners </h1>
            <p className="text-center text-sm text-gray-500">We are glad to offer our visitors high-quality burgers and pizzas, but we also believe our whole business couldn’t be successful without our partners.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-30 justify-center items-center pt-10">
        {Data.map((item,idx)=>{return(
            <span key={idx}>
                <img src={item}/>
            </span>
        )})}
        </div>

        </section>


    </>)}