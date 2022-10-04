import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

export interface ICartIconProps {
  onClick: () => void;
}

export default function CartIcon({ onClick }: ICartIconProps) {
  return (
    <div
      onClick={onClick}
      className="relative flex h-11 w-11 cursor-pointer items-center justify-center"
    >
      <ShoppingIcon className="h-6 w-6" />
      <span className="bold absolute bottom-3 text-xs">0</span>
    </div>
  );
}
