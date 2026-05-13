

import products from "./data/data.json"
import ProductCards from "../components/ProductCards"
import { useState } from "react";

function App() {
 
  console.log(products)
  const [cart, setCart] = useState([]);
  console.log(cart)

  return (
    <main className="p-6">
      <h1 className="font-bold text-3xl mb-8">  Desserts </h1>

      <div className="grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
      <ProductCards
       key={index}
       product={product}
       cart={cart}
       setCart={setCart}
        
        />
    ) )}

      </div>


    </main>
  )
}

export default App
