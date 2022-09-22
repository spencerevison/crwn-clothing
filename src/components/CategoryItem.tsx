import { ICategory } from "./Directory";

export default function CategoryItem(props: ICategory) {
  const { title, imageUrl } = props;
  return (
    <div>
      <div style={{ backgroundImage: imageUrl }}></div>
      <div>
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}
