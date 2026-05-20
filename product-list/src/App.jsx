

import products from "./data/data.json"
import ProductCards from "../components/ProductCards"
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import ConfirmModal from "../components/Confirmmodal";
import { useState } from "react";

function App() {
 
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false)

  const removeItem = (productName) => {

    const updatedCart = cart.filter(
      (item) => item.name !== productName
    );
    setCart(updatedCart);
  }

  const orderTotal = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
)
  

  return (
    <>
    <main className="p-6 bg-(--rose-50) ">

      <section className="md:flex gap-8">

      <div className="flex-1">
     <h1 className="font-bold text-3xl mb-8 text-(--rose-900)">  Desserts </h1>

      <div className="grid gap-6 grid-cols-1  md:grid-cols-1 lg:grid-cols-3">
      {products.map((product, index) => (
      <ProductCards
       key={index}
       product={product}
       cart={cart}
       setCart={setCart}      
        />) )}
         </div>

        </div>

      <Cart cart={cart} removeItem={removeItem} setModal={setModal}/>

      </section>     

     <Footer/>
    </main>
    {modal && (
      <ConfirmModal
      cart={cart}
      setCart={setCart}
      setModal={setModal}
      orderTotal={orderTotal}
      />
    )}
    </>
  )
}

export default App
