import { useState } from "react"
import ProductCard from "./ProductCard"
import ProductCardData from "../utlils/ProductCardData.json";

const Body = () => {

  const [productList, setProductList] = useState(ProductCardData);
  console.log(productList);

  return (
    <div>
      <h1 className="pl-11 pb-12 text-3xl text-[#343A40] text-bold">"Explore the Latest. Power Your Life." <span className="italic text-lg text-gray-400">— Premium Gadgets. Smart Prices.</span></h1>
    <div className="px-10 flex flex-wrap mx-auto">
      {
        productList.map((product) => (
          <ProductCard key={product["_id"]} product={product} />
        ))
      }
    </div>
    </div>

  )
}
// #4BBF73
export default Body