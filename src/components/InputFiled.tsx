import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  placeholder,
  error,
  required,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        {...inputProps}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow-sm outline-none transition placeholder:text-gray-400 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
            : "border-gray-200 hover:border-gray-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        }`}
      />
      {error?.message && (
        <p className="text-xs font-medium text-red-500">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

export default InputField;