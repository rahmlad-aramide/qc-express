import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  emailError?: string;
  firstNameError?: string;
  lastNameError?: string;
  websiteError?: string;
  phoneError?: string;
  companyNameError?: string;
  companyDescriptionError?: string;
  intentError?: string;
  passwordError?: string;
  confirmPasswordError?: string;
  labelColor?: string;
}

const InputField: FC<InputProps> = ({
  label,
  type,
  emailError,
  firstNameError,
  lastNameError,
  websiteError,
  phoneError,
  companyNameError,
  companyDescriptionError,
  intentError,
  passwordError,
  confirmPasswordError,
  labelColor,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <h2
        style={{ color: labelColor }}
        className="font-semibold text-lg text-[#333]"
      >
        {label}
      </h2>
      <input
        type={type}
        placeholder={
          props.placeholder
            ? props.placeholder
            : `Enter ${label.toLowerCase()} here`
        }
        className={`
          ${emailError && "border border-red-500"}
          ${firstNameError && "border border-red-500"}
          ${lastNameError && "border border-red-500"}
          ${websiteError && "border border-red-500"}
          ${phoneError && "border border-red-500"}
          ${companyNameError && "border border-red-500"}
          ${companyDescriptionError && "border border-red-500"}
          ${intentError && "border border-red-500"}
          ${passwordError && "border border-red-500"}
          ${confirmPasswordError && "border border-red-500"}
          border border-[#333] outline-none py-2 px-4 w-[100%] rounded-lg
          `}
        {...props}
      />
      {firstNameError && (
        <p className="text-red-500 text-[12px]">{firstNameError}</p>
      )}
      {lastNameError && (
        <p className="text-red-500 text-[12px]">{lastNameError}</p>
      )}
      {websiteError && (
        <p className="text-red-500 text-[12px]">{websiteError}</p>
      )}
      {emailError && <p className="text-red-500 text-[12px]">{emailError}</p>}
      {phoneError && <p className="text-red-500 text-[12px]">{phoneError}</p>}
      {companyNameError && (
        <p className="text-red-500 text-[12px]">{companyNameError}</p>
      )}
      {companyDescriptionError && (
        <p className="text-red-500 text-[12px]">{companyDescriptionError}</p>
      )}
      {intentError && <p className="text-red-500 text-[12px]">{intentError}</p>}
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
