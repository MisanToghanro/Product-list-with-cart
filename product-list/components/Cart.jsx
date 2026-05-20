

const Cart = ({cart, removeItem, setModal}) => {

    const orderTotal = cart.reduce(
        (total,item) => total + item.price * item.quantity, 0
    )
    
    return(
        <div className="bg-white rounded-xl p-6 h-fit md:w-87.5 mt-6 shadow-md ">
         <h2 className="text-2xl font-bold text-(--color-red) mb-6">
            Your cart({cart.length})
         </h2>

         {cart.length === 0 ? 
         (
         <div className="text-center">
            <img 
            src="/assets/images/empty-cart.svg"
            alt="Empty cart"
            className="mx-auto mb-6"
            />
            <p className="text-(--rose-500)">Your added items will appear here</p>
         </div> ):
         
         (
         <div>
            {cart.map((item) => (
                <div key={item.name} className="border-b-2 border-(--rose-100) py-4">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <div className="flex gap-3 mt-2 text-sm items-center ">

                  <span className="text-(--color-red) font-semibold">
                    {item.quantity}x
                  </span>

                  <span className="text-(--rose-500)">
                    @ ${item.price.toFixed(2)}
                  </span>

                  <span className="font-semibold text-(--rose-900)">
                    ${(item.quantity * item.price).toFixed(2)}
                  </span>

                  <button onClick={() => removeItem(item.name)}
                   className="ml-auto border border-(--rose-300) rounded-full p-1 hover:border(--rose-900) transition cursor-pointer">
                   
                     <img
                      src="assets/images/icon-remove-item.svg"
                      alt="Remove item"/>
                 </button>

                </div>

                </div>))}

                
                <div className="flex justify-between items-center mt-6">
                     
                     <p className="text-(--rose-500)">
                         Order Total
                     </p>
                     
                     <h2 className="text-3xl font-bold">
                        ${orderTotal.toFixed(2)}
                    </h2>
                </div>

                <div className="flex items-center justify-center gap-2 p-3 bg-(--rose-100) mt-4">
                    <img
                    src="assets/images/icon-carbon-neutral.svg"
                    alt="carbon icon"
                    />
                    <p className="text-sm">This is a <b>carbon-neutral</b> delivery</p>
                </div>

                <button
                onClick={() => setModal(true)}
                className="w-full mt-6 bg-(--color-red) text-white py-4 rounded-full hover:opacity-90 transition cursor-pointer">
                     Confirm Order
                </button>
         </div> )}

        </div>
    )
}

export default Cart;