import { createContext, useState } from "react";
import { Product } from "../data/products";

export type CartProduct = Product & { quantity: number };

// Method to add a product to the cart
const addCartProduct = (
  cartProducts: CartProduct[],
  cartProductToAdd: Product
) => {
  // Check if the product is already in the cart
  const existingCartProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === cartProductToAdd.id
  );

  // If the product is already in the cart, increase the quantity
  if (existingCartProduct) {
    return cartProducts.map((cartProduct) =>
      cartProduct.id === cartProductToAdd.id
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct
    );
  }

  // If the product is not in the cart, add it to the cart
  return [...cartProducts, { ...cartProductToAdd, quantity: 1 }];
};

// Interface for the context value
interface ICartContext {
  isCartOpen: boolean;
  toggleCartOpen: () => void;
  cartProducts: CartProduct[];
  addProductToCart: (product: Product) => void;
  itemCount: number;
}

// Store the context value
export const CartContext = createContext<ICartContext>({
  isCartOpen: true,
  toggleCartOpen: () => {},
  cartProducts: [],
  addProductToCart: (product: Product) => {},
  itemCount: 0,
});

// Create the provider component
export const CartProvider = ({ children }: { children: JSX.Element }) => {
  // Adding products to the cart
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const addProductToCart = (product: Product) => {
    setCartProducts(addCartProduct(cartProducts, product));
  };

  // Toggling the cart open and closed
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  // Number of items in the cart
  const itemCount = cartProducts.reduce(
    (accumulatedQuantity, cartProduct) =>
      accumulatedQuantity + cartProduct.quantity,
    0
  );

  const value = {
    isCartOpen,
    toggleCartOpen,
    cartProducts,
    addProductToCart,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
