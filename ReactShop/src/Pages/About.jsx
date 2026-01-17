import InnovationMeetsStyle from "../../public/AboutPage/InnovationMeetsStyle.png"
import { FiBox } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";
import { BsCreditCard2BackFill } from "react-icons/bs";



let Heading = ({text = "Write Text Here"}) =>{
    return(<>

    <div className="text-3xl text-center py-5 md:text-3xl md:py-10 md:px-23 md:text-left">
        {text}
    </div>


    </>)}

let Vision =({title = "Write title Here" ,description = "Write description Here"})=>{
    return(<>
    <div className="bg-[#f5f5f5] flex flex-col gap-2 rounded-lg justify-center items-center p-10 text-center
                                    md:w-90 md:py-15 md:p-0 md:gap-4">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
    </>)}



export let About = () => {
    
    let VisionData = [
        {title : "Our vision",                 description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis."},
        {title : "Our mission",                description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis."},
        {title : "Extra selected item",    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis."},
        {title : "Buyers protection",          description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis."},
        {title : "24 Hour support",     description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis."},
        {title : "No cost on credit card", description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis."}
    ]




    return(<>

                                             {/* Vision Mission */}

    <section className="p-5 w-full">
    <Heading text="Vision Mission" />
    <div className="flex flex-col gap-5
                    md:flex-row md:flex-wrap md:justify-center md:items-center">
    {VisionData.map((item, idx)=>{
        return(
    <Vision key={idx} title={item.title} description={item.description}/>
        )
        
    })}</div>
    </section>

                                            {/* Innovation Meets Style */}

    <section className="w-full p-6 bg-[#f5f5f5]  md:h-full md:pb-20">
        <Heading text="Innovation Meets Style"/>
        
        
        <div className=" flex-col md:flex md:flex-row md:justify-start md:items-center md:gap-8 md:px-20">
             <div className="w-full flex items-center justify-center md:items-start md:justify-start pb-10 md:pb-0">
                <img src={InnovationMeetsStyle} className="w-full rounded-2xl"/>
            </div>
            <div className="w-full">
                <p className="text-sm text-gray-600 text-center md:text-left md:leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos accusantium ipsam inventore autem magni qui, illum ipsum quod cumque, nemo eveniet vel saepe deserunt pariatur, aspernatur amet accusamus! Voluptatum alias, praesentium, perspiciatis quo perferendis necessitatibus quas, modi quibusdam architecto aspernatur eaque fuga! Quis dolorem rem minima praesentium officia nostrum in cum laborum incidunt fuga minus quod error numquam cumque nam eligendi, nobis exercitationem distinction.
                </p>
            </div>
            
           
        </div>
        



    </section>
    

                                            {/* Destination for Online */}

    <section className="w-full text-center px-3 py-10 md:py-20">
        <h1 className="text-3xl font-medium pb-5">Your Destination for Online in all over Pakistan</h1>
        <p className="text-gray-600 text-sm md:leading-6 md:px-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos accusantium ipsam inventore autem magni qui, illum ipsum quod cumque, nemo eveniet vel saepe deserunt pariatur, aspernatur amet accusamus! Voluptatum alias, praesentium, perspiciatis quo perferendis necessitatibus quas, modi quibusdam architecto aspernatur eaque fuga! Quis dolorem rem minima praesentium officia nostrum in cum laborum incidunt fuga minus quod error numquam cumque nam eligendi, nobis exercitationem distinctio, facere illo earum quasi necessitatibus! Odio dignissimos tenetur, modi numquam veritatis totam necessitatibus id laudantium enim commodi quo nemo dolore velit ut. Non quis sed a est iure, maiores aperiam. Repellendus quia provident quod ipsa?
            </p>
    </section>

                                        {/* Support */}


    <section  className=" bg-[#f5f5f5] w-full h-full flex flex-col md:flex-row justify-center items-center gap-15 md:gap-20 py-10 md:py-20">
         
           
           <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[#ff9500] text-5xl"><FiBox /></div>
            <div>
              <h1 className="text-xl">Speedy delivery</h1>
              <p className="text-gray-600 text-sm">Orders from all item</p>
            </div>
           </div>
        
           <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[#ff9500] text-5xl"><HiOutlineRefresh /></div>
            <div>
              <h1 className="text-xl">Easy returns</h1>
              <p className="text-gray-600 text-sm">On all unused items</p>
            </div>
           </div>
        
           <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[#ff9500] text-5xl"><FiHeadphones /></div>
            <div>
              <h1 className="text-xl">Online support</h1>
              <p className="text-gray-600 text-sm">Alway online 24/7</p>
            </div>
           </div>
        
           <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[#ff9500] text-5xl"><BsCreditCard2BackFill /></div>
            <div>
              <h1 className="text-xl">Secure payment</h1>
              <p className="text-gray-600 text-sm">100% Secure payment</p>
            </div>
           </div>
              
    </section>
    </>)}
