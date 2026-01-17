import { Link } from "react-router"

export let Card = ({ data }) => {
    return (
        <>
            <Link to={`/productdetails/${data.slug}`}>
                <div className="bg-white w-70 h-70 md:w-70 md:h-70 shadow-lg shadow-[#192024] rounded overflow-hidden relative transition-all duration-500
                    md:hover:-translate-y-1 md:hover:cursor-pointer md:hover:shadow-2xl md:hover:shadow-black/60">
                    <div className="h-60 absolute top-0 left-0 w-full transition-all duration-500
                        md:group-hover:h-72">
                        <img
                            src={data.CardImage}
                            className="object-fill w-full h-full"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-2 absolute left-0 bottom-0 w-full 
                        h-20 md:h-16 md:group-hover:h-28 md:transition-all md:duration-500 md:overflow-hidden">
                        <h1 className="font-medium">{data.Title}</h1>
                        <span>{data.Price}</span>
                    </div>

                </div>
            </Link>
        </>
    )
}
