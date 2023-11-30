import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  firstNameError?: string;
  lastNameError?: string;
  userNameError?: string;
  emailError?: string;
  phoneError?: string;
  cityError?: string;
  houseError?: string;
  passwordError?: string;
  confirmPasswordError?: string;
}

const InputField: FC<InputProps> = ({
  label,
  type,
  firstNameError,
  lastNameError,
  userNameError,
  emailError,
  phoneError,
  cityError,
  houseError,
  passwordError,
  confirmPasswordError,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-[18px] text-[#6c8073]">{label}</h2>
      <input
        type={type}
        className={
          `
          ${firstNameError && "border border-red-500"}
          ${lastNameError && "border border-red-500"}
          ${userNameError && "border border-red-500"}
          ${emailError && "border border-red-500"}
          ${phoneError && "border border-red-500"}
          ${cityError && "border border-red-500"}
          ${houseError && "border border-red-500"}
          ${passwordError && "border border-red-500"}
          ${confirmPasswordError && "border border-red-500"}
          border border-[#333] outline-none py-2 px-4 w-[100%]
          `
        }
        {...props}
      />
      {firstNameError && (
        <p className="text-red-500 text-[12px]">{firstNameError}</p>
      )}
      {lastNameError && (
        <p className="text-red-500 text-[12px]">{lastNameError}</p>
      )}
      {userNameError && (
        <p className="text-red-500 text-[12px]">{userNameError}</p>
      )}
      {emailError && <p className="text-red-500 text-[12px]">{emailError}</p>}
      {phoneError && <p className="text-red-500 text-[12px]">{phoneError}</p>}
      {cityError && <p className="text-red-500 text-[12px]">{cityError}</p>}
      {houseError && <p className="text-red-500 text-[12px]">{houseError}</p>}
      {passwordError && (
        <p className="text-red-500 text-[12px]">{passwordError}</p>
      )}
      {confirmPasswordError && (
        <p className="text-red-500 text-[12px]">{confirmPasswordError}</p>
      )}
    </div>
  );
};

export default InputField;
