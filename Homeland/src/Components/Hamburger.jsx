import Slide1 from "../../public/Slide/Slide1.png"

export const Hamburger = ({ text  }) => {
  return (
    <>
      <div 
        className="relative -top-18 md:-top-17 left-0 h-80 md:h-151 w-full bg-cover bg-center flex items-center justify-center -mb-14"
        style={{ backgroundImage: `url(${Slide1})` }} >
        <h2 className="absolute z-10 text-white text-4xl md:text-6xl font-light">
          {text}
        </h2>
      </div>
    </>
  )
}