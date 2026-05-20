
const ConfirmModal = ({cart, setCart, setModal, orderTotal}) => {

    const reset = () => {
        setCart([])
        setModal(false)
    }
    return(
        <div className="fixed flex justify-center items-center inset-0 bg-black/50 p-4 z-50" >
            <div className="bg-white rounded-xl p-6 w-full max-w-137.5 max-h-[90vh] overflow-y-auto items-start md:items-center"> 
            <div>
                <img src="/assets/images/icon-order-confirmed.svg" alt="confirm logo" className="w-16 h-16 rounded-lg object-cover"/>
                <h3 className="mb-2 font-bold text-4xl">Order Confirmed</h3>
                <p className="text-(--rose-500) mb-6">We hope you enjoyed your food!</p>
            </div>

            <div className="bg-(--rose-50) rounded-lg p-4">
         {cart.map((item) => (
                <div key={item.name} className="flex justify-between border-b border-(--rose-100) py-4">
                    <img  src={item.image.thumbnail} className="w-16 h-16 rounded-lg object-cover"/>
                    <div>
                    <h4>
                        {item.name}
                    </h4>
                    <div>
                        <p>{item.quantity}x</p>
                        <p>@ ${item.price.toFixed(2)}</p>
                    </div>

                    </div>

                    <p className="font-semibold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>

                </div>
            ))}

          <div className="flex justify-between items-center mt-6">

            <p>Order Total</p>

            <h2 className="text-3xl font-bold">
              ${orderTotal.toFixed(2)}
            </h2>

          </div>


            </div>
            


            <button
            onClick={() => reset()}
             className="rounded-full py-2 px-2 w-full mt-4 cursor-pointer  bg-(--color-red) text-white">
                Start new Order
            </button>

            </div>


        </div>
    )
}
export default ConfirmModal;