import AboutRestorentimg from "../../public/AboutUs/AboutRestorentimg.png"
import bgHeader from "../../public/bgHeader.jpg"

export let AboutRestorent = ()=>{

    let Data =[
        {Title: "20", Description: "Burgers Sold"},
        {Title: "100", Description: "Pizzas Made"},
        {Title: "64", Description: "Clients Everyday"}
    ]

    return(<>

    <section className="w-full bg-cover p-10 flex flex-col gap-15 justify-center items-center md:flex-row md:gap-0">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={AboutRestorentimg} className="w-60 md:w-85"/>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-6xl text-center font-bold pb-3 text-transparent bg-clip-text bg-cover md:text-left md:text-9xl"
                style={{ backgroundImage: `url(${bgHeader})` }}>
                About Us
            </h1>
            <p className="text-center md:text-left text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto vel esse 
                    totam deleniti, blanditiis vitae. Esse velit, sint accusamus cupiditate, corporis
                    beatae ut molestiae voluptate iste atque placeat quibusdam?
            </p>
                <div className="flex w-full justify-between items-center">
                {Data.map((item,idx)=>(
                    <span key={idx} className="flex flex-col py-5 md:py-10">
                        <h1 className="text-(--MAIN) font-extrabold text-4xl text-center md:text-8xl">{item.Title}</h1>
                        <p className="text-xs md:text-2xl text-gray-500">{item.Description}</p>
                    </span>
                ))}
                </div>
            </div>
    </section>


    </>)}