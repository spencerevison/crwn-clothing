import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "./ProductCard";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...{ product }} />
      ))}
    </div>
  );
}
