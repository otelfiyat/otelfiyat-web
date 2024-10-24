import { useState } from "react";

import { UseFormRegister } from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface CustomInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  type: "text" | "password" | "email" | "number";
  name: string;
  label: string;
  placeholder: string;
  error: string;
  password?: boolean;
}

const CustomInput = ({
  register,
  type,
  name,
  label,
  placeholder,
  error,
}: CustomInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <label className="relative form-control w-full max-w-[640px]">
      <div className="label pt-0">
        <span className="font-medium size-body1 text-brand-neutral-900">
          {label}
        </span>
      </div>
      <input
        {...register(name)}
        type={inputType}
        name={name}
        className={`input input-bordered w-full max-w-[640px] ${
          error ? "input-error" : ""
        }`}
        placeholder={placeholder}
      />
      <div className="label">
        <span className="label-text-alt text-brand-negative">{error}</span>
      </div>
      <div className="absolute right-0 top-1/2 flex items-center pr-3 cursor-pointer">
        {type === "password" && (
          <>
            {isPasswordVisible ? (
              <EyeSlashIcon
                className="h-5 w-5 font-medium size-body1 text-brand-primary-600"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              />
            ) : (
              <EyeIcon
                className="h-5 w-5 font-medium size-body1 text-brand-primary-600"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              />
            )}
          </>
        )}
      </div>
    </label>
  );
};

export default CustomInput;
