import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "./CartItem";

export interface ICartDropdownProps {
  className?: string;
}

export default function CartDropdown({ className }: ICartDropdownProps) {
  const { cartProducts } = useContext(CartContext);

  const navigate = useNavigate();
  const gotToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div
      className={`absolute top-20 right-10 z-20 flex h-80 w-60 flex-col border border-black bg-white p-5 ${className}`}
    >
      <div className="flex h-60 flex-col overflow-auto">
        {cartProducts.map((cartProduct) => (
          <CartItem key={cartProduct.id} {...cartProduct} />
        ))}
      </div>
      <button className="btn mt-auto" onClick={gotToCheckoutHandler}>
        GO TO CHECKOUT
      </button>
    </div>
  );
}
