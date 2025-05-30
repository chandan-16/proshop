const Header = () => {
  return (
    <div className="bg-[#343A40] w-full flex justify-between px-10 py-5 text-center mb-12">
        <h1 className="text-white text-xl" >PROSHOP</h1>

        <div className="flex">
            <p className="text-white text-xm"><i className="bi bi-cart-fill pr-1"></i>CART <span className="pl-0">(0)</span> </p>
            <span className="text-white pl-7">JOHN <i className="bi bi-caret-down-fill"></i></span>
        </div>
    </div>
  )
}

export default Header