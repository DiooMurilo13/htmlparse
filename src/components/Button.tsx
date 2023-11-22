"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`px-28 py-4 bg-yellow-500 hover:bg-amber-500 rounded-lg border hover:border-black font-bold text-xl  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
