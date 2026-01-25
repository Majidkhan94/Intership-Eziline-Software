import Card1 from "../../public/Card/Card1.jpg"
import Card2 from "../../public/Card/Card2.jpg"
import Card3 from "../../public/Card/Card3.jpg"
import { Heading } from "../ExternalFiles/index"

export const Recentblog = ()=>{
let Details = [
  {
    image: Card1,
    date: "Jan 20th, 2019",
    Title: "Art Gossip by Mike Charles",
    Description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt."
  },
  {
    image: Card2,
    date: "Jan 20th, 2019",
    Title: "Art Gossip by Mike Charles",
    Description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt."
  },
  {
    image: Card3,
    date: "Jan 20th, 2019",
    Title: "Art Gossip by Mike Charles",
    Description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt."
  }
]



  return(<>
 <section className="bg-gray-50 px-5 md:px-30 py-15">
  <Heading text="Recent Blog"/>

 <div className="flex flex-col md:flex-row justify-center gap-8 bg-gray-50">
  {Details.map((item, idx) => {
    return (
      <div key={idx} className="flex flex-col w-full sm:w-87 bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md" >
        {/* Image Section */}
        <div className="h-56 w-full overflow-hidden">
          <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Date */}
          <span className="text-xs font-bold text-gray-400 uppercase mb-2">
            {item.date}
          </span>

          {/* Title */}
          <h2 className="text-xl mb-2 hover:text-(--GREEN) cursor-pointer transition-colors">
            {item.Title}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm">
            {item.Description}
          </p>
        </div>
      </div>
    );
  })}
</div>
  </section>
  </>)
}