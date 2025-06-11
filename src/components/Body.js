import { useState } from "react"
import ProductCard from "./ProductCard"
import ProductCardData from "../utlils/ProductCardData.json";

const Body = () => {

  const [productList, setProductList] = useState(ProductCardData);
  console.log(productList);

  return (
    <div className="w-full">
      <div className="flex w-full px-10 justify-between ">
        <form>
          <input type="text" placeholder="Search Products.." className="border-2 pl-3 py-2 pr-14 bg-white text-gray-600 rounded-none focus:rounded-none" />
          <button className="border-2 border-green-500 py-2 px-4 ml-1 text-green-500 hover:bg-green-500 hover:text-white cursor-pointer">Search</button>
        </form>
        <h1 className="pl-11 pb-12 text-2xl text-[#343A40] text-bold text-gray-700">"Explore the Latest. Power Your Life." <span className="italic text-sm text-gray-400">— Premium Gadgets. Smart Prices.</span></h1>
      </div>


    <div className="px-10 flex flex-wrap mx-auto">
      {
        productList.map((product) => (
          <ProductCard key={product["_id"]} product={product} />
        )).reverse()
      }
    </div>
    </div>

  )
}
// #4BBF73
export default Body