import Chef1 from "../../public/Chefs/Chef1.jpg";
import Chef2 from "../../public/Chefs/Chef2.jpg";
import Chef3 from "../../public/Chefs/Chef3.jpg";
import Chef4 from "../../public/Chefs/Chef4.jpg";
import Chef5 from "../../public/Chefs/Chef5.jpg";
import Chef6 from "../../public/Chefs/Chef6.jpg";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { NavLink } from "react-router";

export let Ourchef = () => {
  const Data = [
    { Img: Chef1, Title: "Orni Stark", Description: "Founder" },
    { Img: Chef2, Title: "Biltam Robinson", Description: "Head Chef" },
    { Img: Chef3, Title: "Rabina Ives", Description: "Pastry Chef" },
    { Img: Chef4, Title: "Peter Emberson", Description: "Assistant Chef" },
    { Img: Chef5, Title: "Samantha Clark", Description: "Administrator" },
    { Img: Chef6, Title: "Ryan Ricks", Description: "Sous Chef" },
  ];

  return (
    <section className="p-5 md:p-20">
      <div className="w-full flex flex-wrap justify-center gap-8 px-4">
        {Data.map((item, idx) => (
          <div key={idx} className=" w-full sm:w-[48%] md:w-[30%] p-5 flex flex-col items-center text-center cursor-pointer
          shadow-lg rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl" >
            <img src={item.Img} className="rounded-full w-40 md:w-48" />

            <div className="flex flex-col gap-2 py-6">
              <h2 className="text-2xl md:text-3xl text-(--MAIN)"> {item.Title} </h2>
              <p className="text-lg text-gray-500"> {item.Description} </p>

              <div className="flex text-2xl md:text-4xl gap-5 text-(--MAIN) justify-center mt-2">
                <NavLink to=""><CiFacebook /></NavLink>
                <NavLink to=""><CiTwitter /></NavLink>
                <NavLink to=""><CiInstagram /></NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
