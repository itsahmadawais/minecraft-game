import React from "react";

export default function Input({ className = "", label, ...props }) {
  return (
    <div className={`${className}`}>
      {label && <label>{label}</label>}
      <input
        className="bg-cgrey-60 border-[1px] w-full px-4 py-2 rounded-[10px]"
        {...props}
      />
    </div>
  );
}
