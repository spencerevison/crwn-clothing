export interface ICartItemProps {
  key: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export default function CartItem({
  name,
  quantity,
  price,
  imageUrl,
}: ICartItemProps) {
  return (
    <div className="mb-4 flex h-20 w-full">
      <img className="w-1/3" src={imageUrl} alt="" />
      <div className="flex w-3/5 flex-col items-start justify-center py-2 px-5">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
