import { useState } from "react"
import ProductCard from "./ProductCard"
import ProductCardData from "../utlils/ProductCardData.json";

const Body = () => {

  const [productList, setProductList] = useState(ProductCardData);
  console.log(productList);

  return (
    <div className="px-10 flex flex-wrap mx-auto">
      {
        productList.map((product) => (
          <ProductCard key={product["_id"]} product={product} />
        ))
      }
    </div>
  )
}

export default Body