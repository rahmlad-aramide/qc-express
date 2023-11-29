import { FC } from "react";

interface InputProps {
    label: string;
    type: string;
}

const InputField: FC<InputProps> = ({ label, type }) => {
  return (
    <div className="space-y-3">
        <h2 className="font-semibold text-[20px] text-[#4169e2]">{label}</h2>
        <input type={type} className="border border-[#333] outline-none py-2 px-4 w-[100%]" />
    </div>
  )
}

export default InputField
