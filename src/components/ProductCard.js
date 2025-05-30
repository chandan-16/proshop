const ProductCard = ({product}) => {

  return (
    <div className="border mx-auto rounded border-gray-200 hover:border-gray-400 hover:shadow mb-5">
      <div className="p-3 align w-70 h-50  mb-4 mr-4 mx-auto ">
          <img className="w-50  mb-1 text-gray-500 mx-auto"  src={product.image} alt="product image" />
      </div>

      <div className="w-50 h-46 text-left pl-12 pt-5 w-70">
        <a className="text-md text-left text-gray-500 text-gray-500 cursor-pointer hover:underline hover:text-blue-500">{product.name}</a>
        <p className="text-md text-left text-gray-500 text-md pt-2"><i class="bi bi-star-fill"></i> {product.rating} Reviews</p>
        <p className="text-2xl text-lef text-black-700 pt-2">₹{product.price}</p>
        </div>
    </div>
  )
}

export default ProductCard