import { useContext } from "react";
import { CartContext, CartProduct } from "../contexts/cart.context";

export interface ICheckoutItemProps {
  cartItem: CartProduct;
}

export default function CheckoutItem({ cartItem }: ICheckoutItemProps) {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addProductToCart, removeProductFromCart, clearProductFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearProductFromCart(cartItem);
  const removeItemHandler = () => removeProductFromCart(cartItem);
  const addItemHandler = () => addProductToCart(cartItem);

  return (
    <div className="min-h-24 flex w-full items-center justify-between border-b border-b-gray-700 py-4 text-lg">
      <div className="w-[20%] pr-4 sm:w-[23%]">
        <img className="h-full w-full" src={imageUrl} alt="" />
      </div>
      <span className="w-[25%] sm:w-[23%]">{name}</span>
      <div className="w-[25%] sm:w-[23%]">
        <button className="p-2 sm:p-4" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span className="">{quantity}</span>
        <button className="p-2 sm:p-4" onClick={addItemHandler}>
          &#10095;
        </button>
      </div>
      <span className="w-[17%] sm:w-[23%] sm:pl-4">${price}</span>
      <span
        className="w-[16%] cursor-pointer p-4 sm:w-[8%]"
        onClick={clearItemHandler}
      >
        &#10005;
      </span>
    </div>
  );
}
