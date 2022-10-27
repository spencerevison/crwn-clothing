export interface IFormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function FormInput({ label, ...otherProps }: IFormInputProps) {
  return (
    <div className="group relative my-11">
      <label
        className={`${
          otherProps.value.length
            ? "-top-4 left-1 text-sm text-black"
            : "top-2 text-lg text-gray-500"
        } pointer-events-none absolute transition-all group-focus-within:-top-4 group-focus-within:left-1 group-focus-within:text-sm group-focus-within:text-black`}
      >
        {label}
      </label>
      <input
        className={`${
          otherProps.type === "password" ? "tracking-widest" : ""
        } block w-full border-b border-gray-500 bg-white p-2 pl-1 text-lg text-gray-800 focus:border-black focus:outline-none`}
        {...otherProps}
      />
    </div>
  );
}
