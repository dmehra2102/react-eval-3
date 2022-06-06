import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartcount,setCartcount] = useState(0);
  return <CartContext.Provider value={{cartcount,setCartcount}}>{children}</CartContext.Provider>;
};
