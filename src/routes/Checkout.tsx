import { useContext } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { CartContext } from "../contexts/cart.context";

export interface ICheckoutProps {}

export default function Checkout(props: ICheckoutProps) {
  const { cartProducts, totalPrice } = useContext(CartContext);
  return (
    <div className="mx-auto mt-12 flex min-h-[90vh] flex-col items-center md:w-4/6">
      <div className="flex w-full justify-between border-b border-b-gray-700 py-3">
        <div className="w-[20%] sm:w-[23%]">Product</div>
        <div className="w-[25%]">Description</div>
        <div className="w-[25%] pl-2 sm:w-[23%] sm:pl-4">Quantity</div>
        <div className="w-[17%] sm:w-[23%] sm:pl-4">Price</div>
        <div className="w-[16%] sm:w-[8%]">Remove</div>
      </div>
      <div className="w-full">
        {cartProducts.map((cartItem) => (
          <CheckoutItem key={cartItem.id} {...{ cartItem }} />
        ))}
      </div>
      <span className="mt-8 ml-auto text-3xl">Total Price: ${totalPrice}</span>
    </div>
  );
}
