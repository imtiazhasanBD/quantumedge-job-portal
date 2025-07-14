"use client";

import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const InputField = ({
  type,
  placeholder,
  icon,
  showEyeIcon = false,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password" && showEyeIcon;

  return (
    <div className="relative">
      {/* Left Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
        {icon}
      </div>

      {/* Input Field */}
      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-full bg-transparent border border-custom-gray px-4 py-3 rounded-full focus:outline-none focus:ring-1 ring-custom-green placeholder-custom-gray placeholder:font-semibold placeholder:text-xs pl-12"
        value={value}
        onChange={onChange}
      />

      {/* Right Eye Icon */}
      {isPassword && (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <LuEyeOff size={"1.1rem"} /> : <LuEye size={"1.1rem"} />}
        </div>
      )}
    </div>
  );
};

export default InputField;
