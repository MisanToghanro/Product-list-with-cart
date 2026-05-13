

const ProductCards = ({product,cart, setCart}) => {


    const addToCart = () => {
         const existingItem = cart.find(
            (item) => item.name === product.name
         )

         if(existingItem) {

            const updatedcart = cart.map((item) => {
                if(item.name === product.name) {
                    return {...item, quantity:item.quantity + 1}          
                }
                 return item;
            }) 
            setCart(updatedcart)
         } else {
            setCart([...cart , {...product, quantity:1}])
         }}

    const cartItem = cart.find(
        (item) => item.name === product.name 
        )

        const increaseQuantity = () => {

            const updatedcart = cart.map(
                (item ) => item.name === product.name ? {...item, quantity:item.quantity + 1} : item)
          setCart(updatedcart);
        }

        const decreaseQuantity = () => {

            const updatedcart = cart.map(
                (item) => item.name === product.name ? {...item , quantity:item.quantity - 1} : item).filter((item) => item.quantity > 0)

                setCart(updatedcart)
            }


    return(
        <div className="bg-white rounded-xl shadow-md p-4 hover:border-2 hover:border-(--color-red) hover:scale-105 transition duration-300 cursor-pointer">
            <img src={product.image.desktop} 
             alt={product.name} 
             className="w-full h-60 object-cover "/>
            
            <div className="p-4">
            
            <p className="text-sm text-[hsl(7, 20%, 60%)]" >{product.category}</p>
            <p  className="text-lg font-semibold text-[hsl(12, 20%, 44%)]">{product.name}</p>
            <p className="font-semibold text-(--color-red)">${product.price.toFixed(2)}</p>

            {
                cartItem ? (
                   <div className="flex justify-between items-center gap-4  bg-(--color-red) text-white rounded-full py-2 px-2 mt-4 cursor-pointer">

                    <button onClick={decreaseQuantity} className="border border-(--rose-50) rounded-full p-2 hover:scale-110 ">
                        <img src="assets/images/icon-decrement.svg"/>
                    </button>

                    <span>{cartItem.quantity}</span>
 
                     <button onClick={increaseQuantity} className="border border-(--rose-50) rounded-full p-2 hover:scale-110 ">
                        <img src="assets/images/icon-increment.svg"/>
                    </button>

                   </div>
                ): (
            <button className="rounded-full py-2 px-2 w-full mt-4 cursor-pointer border-2 border-(--color-red)"
            onClick = {addToCart} >
                <div className="flex justify-center gap-3">
                    <img src="assets/images/icon-add-to-cart.svg"/>
                    <p>Add to cart</p>
                </div>
                
                </button>
                )
            }


            </div>
 

        </div>
    )
}

export default ProductCards;