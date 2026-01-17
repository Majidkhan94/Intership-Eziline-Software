import Gallery1 from "../../public/Gallery/Gallery1.png";
import Gallery2 from "../../public/Gallery/Gallery2.png";
import Gallery3 from "../../public/Gallery/Gallery3.png";
import Gallery4 from "../../public/Gallery/Gallery4.png";
import Gallery5 from "../../public/Gallery/Gallery5.png";
import Gallery6 from "../../public/Gallery/Gallery6.png";
import Gallery7 from "../../public/Gallery/Gallery7.png";
import Gallery8 from "../../public/Gallery/Gallery8.png";
import Gallery9 from "../../public/Gallery/Gallery9.png";
import Gallery10 from "../../public/Gallery/Gallery10.png";
import Gallery11 from "../../public/Gallery/Gallery11.png";
import Gallery12 from "../../public/Gallery/Gallery12.png";

export let Gallery = () => {
  let Data = [ Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6,
               Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12 ];

  return (
    <section className="p-5">
      <div className="w-full flex flex-wrap gap-5 justify-center items-center">
        {Data.map((item, idx) => (
          <div key={idx} className="w-full md:w-1/5 cursor-pointer shadow-lg hover:shadow-2xl
              transition-all duration-300 hover:-translate-y-3 rounded-2xl overflow-hidden">
            <img src={item} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};
