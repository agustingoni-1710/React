import React, { useState, createContext } from "react";


export const CartContext = createContext({
  cart: [],
  clearCart: () => {},
  isInCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {}
});

const CartProvider = (props) => {

  const [cart, setCart] = useState([]);

  // Vaciar carrito.
  const clearCart = () => {
    setCart([]);
  }

  // Verificar si un producto ya está en el carrito.
  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  }

  // Agregar un producto al carrito.
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  
  // Eliminar un producto del carrito.
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart);
  };

  // Obtener la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    let cant = 0
    cart.forEach((e) => cant += e.quantity)
    return cant
  };

  // Obtener el total del carrito en función de la cantidad y el precio de cada producto
  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.price))
    return total        
  };

  return (
   
    <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart, getTotalQuantity, getTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;