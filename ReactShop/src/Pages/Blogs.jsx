import blog1 from "../../public/Blog/blog1.png"
import blog2 from "../../public/Blog/blog2.png"
import blog3 from "../../public/Blog/blog3.png"

export let Blogs = () =>{
let Data = [
    {
        Image: blog1,
        Title: "Lorem ipsum dolor sit",
        Descrption :`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit 
        eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit 
        eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit 
        eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit 
        eligendi beatae similique? Qui, magnam eum cum ullam enim porro.`
    },
    {
        Image: blog2,
        Title: "Lorem ipsum dolor sit",
        Descrption : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.`
    },
    {
        Image: blog3,
        Title: "Lorem ipsum dolor sit",
        Descrption : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laboriosam dicta odit eligendi beatae similique? Qui, magnam eum cum ullam enim porro.`
    }
    ]
    return(<>
        <section className="flex flex-col md:flex-row">
            <div className="mt-3 p-5 border-b-2 border-0 border-[#f5f5f5] md:p-10 md:w-200 bg-[#f5f5f5] md:mt-10 rounded-lg">
                <h1 className="text-center text-3xl font-medium pb-5 md:text-left">Latest Blog</h1>
                <span className="flex-col flex gap-0">
                    {Data.map((item, idx)=>{
                        return(
                                <div key={idx} className="pb-3 flex flex-col justify-center items-center md:justify-start md:items-start cursor-pointer">
                                    <h1 className="text-sm">{item.Title}</h1>
                                </div>
                            )})}
                </span>
            </div>
            
            <div>
                 {Data.map((item, idx)=>{
                 return(
                <div key={idx} className="flex flex-col justify-center items-center p-5
                                md:p-10">
                    <img src={item.Image} className="w-full"/>
                    <h1 className="text-lg py-4 text-center font-medium
                                    md:text-2xl md:text-left md:w-full">{item.Title}</h1>
                    <p className="text-sm text-gray-600 text-center md:text-left
                                ">{item.Descrption}</p>
                </div>)
             })}
            </div>
            
        </section>
        
    </>)}



