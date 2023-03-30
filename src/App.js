
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Landing from "./components/Landing";
import ItemDetail from "./components/ItemDetail";
import Navbar from "./components/Navbar";
import CartProvider from "./Context/CartContext";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/item/:itemId" element={<ItemDetail />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;