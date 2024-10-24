import { useRef, useState } from "react";

// declare type for the props

type InputProps = {
  length?: number;
  onComplete: (code: string) => void;
};

const CustomOTP = ({ length = 6, onComplete }: InputProps) => {
  // if you're not using Typescript, simply do const inputRef = useRef()

  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));

  // if you're not using Typescript, do useState()
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleTextChange = (input: string, index: number) => {
    const newCode = [...OTP];
    newCode[index] = input;
    setOTP(newCode);

    // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    // if the user has entered all the digits, grab the digits and set as an argument to the onComplete function.

    if (newCode.every((digit) => digit !== "")) {
      onComplete(newCode.join(""));
    }
  };

  // return the inputs component

  return (
    <div className="grid grid-cols-6">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="number"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          ref={(ref) => {
            inputRef.current[index] = ref as HTMLInputElement;
          }}
          className="border border-brand-primary-100 rounded-lg w-12 h-12 text-center size-title1 font-medium text-brand-primary-500"
        />
      ))}
    </div>
  );
};

export default CustomOTP;
