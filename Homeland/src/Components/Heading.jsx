export let Heading = ({
  text = "WriteHere",
  Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, delenition.",
  
})=>{
  return(<>
  
    <div className="pb-10 md:pb-15 flex flex-col justify-center items-center gap-5 md:px-70">
      <h2 className="text-4xl md:text-3xl font-semibold">{text}</h2>
      <p className="text-center text-sm">{Description}</p>
    </div>
  
   </>)
}