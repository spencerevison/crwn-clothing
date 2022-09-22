import CategoryItem from "./CategoryItem";

export interface ICategory {
  id: number;
  title: string;
  imageUrl: string;
}

export interface IDirectoryProps {
  categories: ICategory[];
}

export default function Directory({ categories }: IDirectoryProps) {
  console.log(categories);
  return (
    <div>
      {categories.map((category: ICategory) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}
