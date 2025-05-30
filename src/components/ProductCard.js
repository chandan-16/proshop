const ProductCard = ({product}) => {


  return (
    <div className="p-3 rounded shadow w-70 h-60">
      <img className="w-60 h-60"  src={product.image} alt="product image" />
      <h1 className="">{product.name}</h1>
      <p className="">{product.rating}</p>
      <p className="">₹{product.price}</p>
    </div>
  )
}

export default ProductCard