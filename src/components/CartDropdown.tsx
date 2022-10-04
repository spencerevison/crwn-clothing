export interface ICartDropdownProps {
  className?: string;
}

export default function CartDropdown({ className }: ICartDropdownProps) {
  return (
    <div
      className={`absolute top-20 right-10 z-10 flex h-80 w-60 flex-col border border-black bg-white p-5 ${className}`}
    >
      <div className="flex h-60 flex-col"></div>
      <button className="btn mt-auto">GO TO CHECKOUT</button>
    </div>
  );
}
