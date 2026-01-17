    import Service from "../../public/Images/Service.jpg"
    import services1 from "../../public/Images/services1.png"
    import services2 from "../../public/Images/services2.png"
    import services3 from "../../public/Images/services3.png"
    import services4 from "../../public/Images/services4.png"
    
    export let Services = ()=>{
        let data = [
            {
                img : services1,
                name : "Web Design",
                description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et similique qui repellat expedita,"
            },
            {
                img : services2,
                name : "Branding",
                description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et similique qui repellat expedita,"
            },
            {
                img : services3,
                name : "Marketing",
                description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et similique qui repellat expedita,"
            },
            {
                img : services4,
                name : "Support",
                description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et similique qui repellat expedita,"
            }
        ]
    return(<>
<section id="services" className="relative w-full md:h-131">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${Service})` }}
  >
    {/* Optional dark overlay for readability */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-5 py-10 flex flex-wrap justify-center items-center gap-5 h-full">
    {data.map((item, idx) => (
      <div
        key={idx}
        className="bg-white/20 h-full backdrop-blur-md rounded-xl p-5 w-72 flex flex-col justify-center items-center text-center shadow-lg hover:bg-white/30 transition-all duration-300"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-white/50"
        />
        <h2 className="text-white text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-white/90 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
</section>

    </>)}