
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Landing";
import ItemDetail from "./components/ItemDetail";
import NavbarPage from "./components/Navbar";
import CartProvider from "./Context/CartContext";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <NavbarPage />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/:itemId" element={<ItemDetail />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;