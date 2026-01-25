export const Selectcity = ()=>{

  let ListingTypes = ()=>{
    return(
      <div className="flex flex-col gap-2">
        <label className="text-(--BASE) text-xs tracking-widest"> LISTING TYPES </label>
        <select className="bg-white px-4 py-2 w-48 outline-none">
          <option>Condo</option>
          <option>Commercial Building</option>
          <option>Property Land</option>
        </select>
      </div>
    )
  }

  let OfferType = ()=>{
    return(
      <div className="flex flex-col gap-2">
        <label className="text-(--BASE) text-xs tracking-widest"> OFFER TYPE </label>
        <select className="bg-white px-4 py-2 w-48 outline-none">
          <option>For Sale</option>
          <option>For Rent</option>
          <option>For Lease</option>
        </select>
      </div>
    )
  }

  let SelectCity = ()=>{
    return(
      <div className="flex flex-col gap-2">
        <label className="text-(--BASE) text-xs tracking-widest"> SELECT CITY </label>
        <select className="bg-white px-4 py-2 w-48 outline-none">
          <option>New York</option>
          <option>Brooklyn</option>
          <option>London</option>
        </select>
      </div>
    )
  }

  return(
    <>
      <section className="w-full md:px-15">
        <div className="bg-[#2c4f68] px-3 py-10 md:px-10 md:py-15 flex flex-col md:flex-row  justify-center items-center gap-5 md:gap-10">
          
          <ListingTypes />
          <OfferType />
          <SelectCity />

          <button className="bg-lime-500 text-white px-18 py-2 mt-5 font-medium hover:bg-lime-600 transition">
            Search
          </button>

        </div>
      </section>
    </>
  )
}
