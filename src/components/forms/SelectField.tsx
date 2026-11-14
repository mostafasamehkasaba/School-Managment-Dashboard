import { FieldError } from "react-hook-form";

type SelectFieldProps = {
  label: string;
  name: string;
  register: any;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
};

const SelectField = ({
  label,
  name,
  register,
  options,
  defaultValue,
  placeholder = "Select an option",
  error,
  required,
}: SelectFieldProps) => {
  const allOptions =
    defaultValue && !options.includes(defaultValue)
      ? [defaultValue, ...options]
      : options;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <select
        id={name}
        {...register(name)}
        defaultValue={defaultValue ?? ""}
        className={`w-full appearance-none rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow-sm outline-none transition ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
            : "border-gray-200 hover:border-gray-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {allOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error?.message && (
        <p className="text-xs font-medium text-red-500">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

export default SelectField;
