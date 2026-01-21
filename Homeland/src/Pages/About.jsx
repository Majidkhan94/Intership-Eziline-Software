
import Agent4 from "../../public/Agents/Agent4.jpg"

import { Hamburger,Ouragents,Leadership,Heading} from "../index"
import { BiDownArrowAlt } from "react-icons/bi";


export const About = ()=>{

  const questions = [
    {
      question: "What is the name of your company",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet.",
      icon : <BiDownArrowAlt />
    },
    {
      question: "How much pay for 3 months?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet.",
      icon : <BiDownArrowAlt />
    },
    {
      question: "Do I need to register?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet.",
      icon : <BiDownArrowAlt />
    },
    {
      question: "Who should I contact in case of support.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet.",
      icon : <BiDownArrowAlt />
    }
  ];

  return(<>
  
  <Hamburger text="ABOUT"/>
 
  <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-10 md:py-30 px-8 md:px-24 bg-white">
  
  <div className="w-full md:w-1/2">
    <img src={Agent4} className="w-full h-auto object-cover shadow-sm" />
  </div>

  <div className="w-full md:w-1/2 flex flex-col items-start text-left">
    <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-6">
      OUR COMPANY
    </h2>
    
    <p className="text-gray-500 text-lg mb-6">
      Illum repudiandae ratione facere explicabo. Consequatur dolor optio iusto, quos autem voluptate ea? 
      Sunt laudantium fugiat, mollitia voluptate? Modi blanditiis veniam nesciunt architecto odit 
      voluptatum tempore impedit magnam itaque natus!
    </p>

    <button className="bg-(--GREEN) text-white cursor-pointer px-8 py-3 rounded-sm 
    font-medium"> Read More
    </button>
  </div>

</section>

<section className="w-full bg-gray-50">
<Leadership/>
</section>
<Ouragents />

<section className="w-full bg-gray-50 py-15 px-5">
<Heading text="Frequently Ask Questions" />

<div className="flex flex-col gap-6 max-w-4xl mx-auto mt-12">
  {questions.map((item, idx) => {
    return (
      <details 
        key={idx} 
        className="group border-b border-gray-100 pb-4 transition-all"
        open={idx === 0}
      >
       
        <summary className="flex items-center gap-4 list-none cursor-pointer focus:outline-none">
          <span className="p-1 rounded-sm bg-gray-100 text-gray-400 group-open:bg-blue-900 group-open:text-white transition-colors">
            <span className="group-open:rotate-180 transition-transform block">
              {item.icon}
            </span>
          </span>
          
          <h3 className="text-lg font-medium text-gray-800 group-open:text-blue-900 transition-colors">
            {item.question}
          </h3>
        </summary>

        {/* Answer summary ke bahar lekin details ke andar hoga */}
        <div className="mt-4 ml-10 text-gray-500 text-sm leading-relaxed">
          <p>{item.answer}</p>
        </div> 
      </details>
    );
  })}
</div>
</section>



  </>)}