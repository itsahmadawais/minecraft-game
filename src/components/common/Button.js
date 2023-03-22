import React from "react";

export default function Button({ className, children, ...props }) {
  return (
    <button className={` ${className} px-4 py-2 rounded-[5px]`} {...props}>
      {children}
    </button>
  );
}
