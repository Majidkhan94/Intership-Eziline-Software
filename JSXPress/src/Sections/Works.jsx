    import Feature1 from "../../public/Images/Feature1.jpg"
    import Feature2 from "../../public/Images/Feature2.jpg"
    import Feature3 from "../../public/Images/Feature3.jpg"
    import Feature4 from "../../public/Images/Feature4.jpg"
    import Feature5 from "../../public/Images/Feature5.jpg"
    import Feature6 from "../../public/Images/Feature6.jpg"
    import Feature7 from "../../public/Images/Feature7.jpg"
    import Feature8 from "../../public/Images/Feature8.jpg"
    import Client from "../../public/Images/Client.jpg"

    
    
    export let Works = ()=>{
        let data=[
            {image : Feature1}, {image : Feature2}, {image : Feature3}, {image : Feature4},
            {image : Feature5}, {image : Feature6}, {image : Feature7}, {image : Feature8},
        ]

        let prices = [
            {title:"Basic",desc1:"Fully Responsive",desc2:"Clean Design",desc3:"Tons of Features",Price:"$72",month:"Monthly"},
            {title:"Advanced",desc1:"Fully Responsive",desc2:"Clean Design",desc3:"Tons of Features",Price:"$172",month:"Monthly"},
            {title:"Premium",desc1:"Fully Responsive",desc2:"Clean Design",desc3:"Tons of Features",Price:"$272",month:"Monthly"},
            {title:"VIP",desc1:"Fully Responsive",desc2:"Clean Design",desc3:"Tons of Features",Price:"$372",month:"Monthly"}
        ]
    return(<>
    <section id="works">

        <div className="h-40 md:h-50 flex flex-col justify-center items-center gap-2 md:gap-5">
            <span className="text-lg md:text-lg text-(--COLOR)">BEST PROJECTS</span>
            <h2 className="text-2xl md:text-5xl font-medium">Feature Work</h2>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-5 px-0 md:px-10 justify-center items-center">
  {data.map((items, idx) => (
    <div
      key={idx}
      className="w-70 cursor-pointer shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-300"
    >
      <img
        src={items.image}
        alt={items.title}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>

<div className="bg-cover bg-center h-full flex flex-col justify-center items-center py-20 md:py-40 gap-6 px-0 md:px-35" style={{ backgroundImage: `url(${Client})`}}>
        <h1 className="text-white text-4xl md:text-6xl">Happy Clients</h1>
        <p className="text-lg text-white text-center">I am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with canna agency.</p>
        <span className="text-sm text-white">John C. Marshall / Art Director</span>
</div>


<div className="h-40 md:h-50 flex flex-col justify-center items-center gap-2 md:gap-5">
            <span className="text-lg md:text-lg text-(--COLOR)">BEST PRICES</span>
            <h2 className="text-2xl md:text-5xl font-medium">Our Affordable Prices</h2>
</div>
    
<div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mx-10">
  {prices.map((item,idx)=>{return(
    <div
      key={idx}
      className="bg-(--COLOR) w-full md:w-72 h-100
      flex flex-col justify-between items-center
      py-12 px-6 text-center
      rounded-2xl
      shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold text-white">{item.title}</h1>

        <span className="text-white text-sm">{item.desc1}</span>
        <span className="text-white text-sm">{item.desc2}</span>
        <span className="text-white text-sm">{item.desc3}</span>
      </div>

      <div className="mt-8">
        <span className="block text-5xl font-bold text-white">{item.Price}</span>
        <span className="text-white text-sm">{item.month}</span>
      </div>
      {/* <Button text="ORDER NOW"/> */}
    </div>
  )})}
</div>






    
    </section>
    </>)}