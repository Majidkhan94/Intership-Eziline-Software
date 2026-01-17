import { useParams } from "react-router-dom";
import { UseProducts } from "../Context/ProductContext";
import { Button } from "../Exportfiles";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { Addtocart } from "../Store/CartSlice";








export let ProductDetails = () => {
  const { slug } = useParams();
  const { products } = UseProducts();
let dispatch = useDispatch()
  const product = products.find(p => p.slug === slug);

  if (!product) return <h2>Product not found</h2>;

    let Navigate = useNavigate();

    let handleAddtocart=()=>{
        dispatch(Addtocart(product))
        Navigate("/cart")
    } 




  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 md:p-12">

      {/* Left – Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.CardImage}
          alt={product.Title}
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Right – Details */}
      <div className="flex-1 flex flex-col justify-center items-start gap-4">

        <h1 className="text-2xl md:text-4xl font-light ">
          {product.Title}
        </h1>

        <p className="text-xl font-bold text-green-600">
          {product.Price}
        </p>

        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Actions */}
        <div className="flex gap-4 mt-4">
          
          <Button text="Add to Cart" onClick={()=>{handleAddtocart()}}/>
          

          
        </div>

      </div>

    </div>
  );
};
