import { useRef, useState, forwardRef } from "react";

const Input = forwardRef(function Input(
  { onChange, name = "", label = "", type = "text" },
  ref
) {
  return (
    <fieldset className="w-full text-left">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        ref={ref}
        className="w-full p-2 border border-gray-500 rounded"
      />
    </fieldset>
  );
});

export default Input;
