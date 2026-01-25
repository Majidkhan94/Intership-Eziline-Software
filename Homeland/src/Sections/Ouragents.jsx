import { Heading } from "../ExternalFiles/index"
import Agent1 from "../../public/Agents/Agent1.jpg"
import Agent2 from "../../public/Agents/Agent2.jpg"
import Agent3 from "../../public/Agents/Agent3.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const Ouragents = () => {
  let Details = [
    { 
      image: Agent1,
      name: "Megan Smith",
      role: "Real Estate Agent",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est. Totam atque corporis nisi, veniam non. Tempore cupiditate, vitae minus obcaecati provident beatae!",
      socials: [<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />]
    },
    {
      image: Agent2,
      name: "Brooke Cagle",
      role: "Real Estate Agent",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae voluptates culpa earum similique corrupti itaque veniam doloribus amet perspiciatis recusandae sequi nihil tenetur ad, modi quos id magni!",
      socials: [<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />]
    },
    {
      image: Agent3,
      name: "Philip Martin",
      role: "Real Estate Agent",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo.",
      socials: [<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />]
    },
  ];

  return (
    <section className="py-16 px-8 md:px-20">
      <Heading text="Our Agents" />
      
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5">
        {Details.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            
            {/* Image Container */}
            <div className="overflow-hidden mb-6">
              <img src={item.image} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Name & Role */}
            <h2 className="text-xl font-medium text-gray-800 mb-1">
              {item.name}
            </h2>
            <span className="text-gray-400 text-sm mb-2">
              {item.role}
            </span>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-4">
              {item.Description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {item.socials.map((icon, iconIdx) => (
                <span 
                  key={iconIdx} 
                  className="text-gray-700 hover:text-(--GREEN) cursor-pointer transition-colors text-sm"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};