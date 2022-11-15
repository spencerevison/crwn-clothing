import { createContext, useState } from "react";
import { Product } from "../data/products";

export type CartProduct = Product & { quantity: number };

/* -------------------------------------------------------------------------- */
/*                               Helper Functions                             */
/* -------------------------------------------------------------------------- */
// Method to add a product to the cart
const addCartProduct = (cartProducts: CartProduct[], productToAdd: Product) => {
  // Check if the product is already in the cart
  const existingCartProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === productToAdd.id
  );

  // If the product is already in the cart, increase the quantity
  if (existingCartProduct) {
    return cartProducts.map((cartProduct) =>
      cartProduct.id === productToAdd.id
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct
    );
  }

  // If the product is not in the cart, add it to the cart
  return [...cartProducts, { ...productToAdd, quantity: 1 }];
};

// Method to remove a product from the cart)
const removeCartProduct = (
  cartProducts: CartProduct[],
  productToRemove: Product
) => {
  // Check if the product is already in the cart
  const existingCartProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === productToRemove.id
  );

  // If the product is not in the cart, return the cart
  if (!existingCartProduct) {
    return cartProducts;
  }

  // If the product is in the cart, decrease the quantity
  if (existingCartProduct.quantity > 1) {
    return cartProducts.map((cartProduct) =>
      cartProduct.id === productToRemove.id
        ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
        : cartProduct
    );
  }

  // If the product is in the cart and the quantity is 1, remove the product from the cart
  return cartProducts.filter(
    (cartProduct) => cartProduct.id !== productToRemove.id
  );
};

/* -------------------------------------------------------------------------- */
/*                       Interface for the context value                      */
/* -------------------------------------------------------------------------- */
interface ICartContext {
  isCartOpen: boolean;
  toggleCartOpen: () => void;
  cartProducts: CartProduct[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  clearProductFromCart: (product: Product) => void;
  totalPrice: number;
  itemCount: number;
}

/* -------------------------------------------------------------------------- */
/*                           Store the context value                          */
/* -------------------------------------------------------------------------- */
export const CartContext = createContext<ICartContext>({
  isCartOpen: true,
  toggleCartOpen: () => {},
  cartProducts: [],
  addProductToCart: (product: Product) => {},
  removeProductFromCart: (product: Product) => {},
  clearProductFromCart: (product: Product) => {},
  totalPrice: 0,
  itemCount: 0,
});

/* -------------------------------------------------------------------------- */
/*                        Create the provider component                       */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }: { children: JSX.Element }) => {
  // Toggling the cart open and closed
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  // Adding products to the cart
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const addProductToCart = (product: Product) => {
    setCartProducts(addCartProduct(cartProducts, product));
  };

  // Removing products from the cart
  const removeProductFromCart = (product: Product) => {
    setCartProducts(removeCartProduct(cartProducts, product));
  };

  // Clear product from the cart
  const clearProductFromCart = (product: Product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };

  // Get the total price of items in the cart
  const totalPrice = cartProducts.reduce(
    (total, cartProduct) => total + cartProduct.price * cartProduct.quantity,
    0
  );

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
    removeProductFromCart,
    clearProductFromCart,
    totalPrice,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
