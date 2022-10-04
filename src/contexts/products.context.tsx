import { createContext, useState } from "react";
import { Product, productData } from "../data/products";

// Store the context value
export const ProductsContext = createContext({
  products: productData,
  setProducts: (products: any) => {},
});

// Create the provider component
export const ProductsProvider = ({ children }: { children: JSX.Element }) => {
  const [products, setProducts] = useState<Product[]>(productData);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
