import { createContext, useState } from "react";

// Store the context value
export const CartContext = createContext({
  isCartOpen: true,
  toggleCartOpen: () => {},
});

// Create the provider component
export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  const value = { isCartOpen, toggleCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
