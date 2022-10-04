import { createContext, useState } from "react";

// Store the context value
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

// Create the provider component
export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => setHidden(!hidden);
  const value = { hidden, toggleHidden };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
