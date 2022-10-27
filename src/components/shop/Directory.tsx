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
  return (
    <div className="flex w-full flex-wrap justify-between gap-4">
      {categories.map((category: ICategory) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
}
