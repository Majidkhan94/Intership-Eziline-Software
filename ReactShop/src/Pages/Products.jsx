import { UseProducts } from "../Context/ProductContext";
import {Card} from "../Exportfiles";

export let Products = () =>{

    let { products } = UseProducts();


    return(<>
        <div className="py-10 md:py-15 ">
        <div className="flex px-0 md:px-10 flex-wrap gap-5 justify-center">
        {products.map((product)=>(
            <Card key={product.Id} data={product}/>
        ))}
        </div>
    </div>
    </>)}