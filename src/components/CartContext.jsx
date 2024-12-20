import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setTotalCost((prev) => prev + product.price);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product_id !== productId));
    const removedItem = cart.find((item) => item.product_id === productId);
    setTotalCost((prev) => prev - removedItem.price);
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.product_id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setTotalCost(0);
  };

  const sortByPrice = () => {
    setCart((prev) => [...prev].sort((a, b) => b.price - a.price));
    toast.info('All card sorted by price');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        totalCost,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        clearCart,
        sortByPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
