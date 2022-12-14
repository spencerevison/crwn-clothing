import { ICategory } from "./Directory";

export default function CategoryItem(props: ICategory) {
  const { title, imageUrl } = props;
  return (
    <div className="group grid h-60 w-full min-w-[30%] flex-auto place-items-center overflow-hidden border border-black hover:cursor-pointer sm:w-auto">
      <div
        className="col-start-1 row-start-1 h-full w-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="z-10 col-start-1 row-start-1 border border-black bg-white/80 p-6 text-center group-hover:bg-white/90">
        <h2 className="mb-2 text-2xl font-bold uppercase leading-none text-stone-800">
          {title}
        </h2>
        <p className="font-light leading-none">Show Now</p>
      </div>
    </div>
  );
}
