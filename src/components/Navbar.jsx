import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import logo from "../img/logo.png"
import "./NavbarStyle.css"

const Navbar = () => {

  const { cart, getTotal, getTotalQuantity, clearCart } = useContext(CartContext)

  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="logo"
        style={{
        width: "75px",
        height: "auto",
        }} />  
      <a class="navbar-brand" href="/">MDQCaps</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>

        <li>
          <div
            className="cart-dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <i class="bi bi-cart4"></i>

              {cart.length > 0 && (
                <span
                  className="badge badge-pill badge-danger ml-1"
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px 8px",
                    color: "white",
                  }}>
                  {getTotalQuantity()}
                </span>
              )}
              {isOpen && (
                <div className="cart-dropdown">
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id}>
                        <span>{item.name} | <span style={{color: 'green'}}>x{item.quantity}</span> <b>${item.price*item.quantity}</b></span>
                      </li>
                    ))}
                  </ul>
                  { 
                  cart.length > 0 &&
                  <div style={{marginTop: '20px'}}>
                    <ul>
                      <span><u>Productos totales:</u> {getTotalQuantity()} </span>
                    </ul>
                    <ul>
                    <span><u>Total a pagar:</u> ${getTotal()} </span>
                    <button type="button" class="btn btn-dark btn-sm" onClick={() => clearCart()}>Vaciar</button>
                  </ul>

                  </div>
                  }
                </div>
              )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar