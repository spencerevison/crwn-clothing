import { Product } from "../data/products";

export interface IProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: IProductCardProps) {
  const { name, price, imageUrl } = product;
  return (
    <div className="group relative grid flex-col items-center">
      <img
        className="col-start-1 row-start-1 h-96 w-full object-cover transition-opacity duration-300 ease-out group-hover:opacity-80"
        src={imageUrl}
        alt=""
      />
      <div className="flex justify-between text-lg">
        <span className="">{name}</span>
        <span className="">{price}</span>
      </div>
      <button className="btn btn-inverted z-10 col-start-1 row-start-1 mx-8 mb-8 self-end opacity-0 transition-opacity group-hover:opacity-100">
        Add to cart
      </button>
    </div>
  );
}
