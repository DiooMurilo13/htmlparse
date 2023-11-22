"use client";

import { useEffect } from "react";
import { IInputProps } from "./Input";
import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";

export function TextAreaInput({
  name,
  inputName,
  form,
  defaultValue,
  placeholder,
  required,
  className,
}: IInputProps) {
  useEffect(() => {
    form?.setValue(`${name}`, defaultValue);
  }, [defaultValue, form, name]);

  return (
    <FormItem>
      {inputName && <FormLabel>{inputName}</FormLabel>}
      <FormControl>
        <textarea
          className={`w-full rounded-md text-slate-500 p-4 border-2 ${className}`}
          defaultValue={defaultValue}
          required={required}
          name={name}
          placeholder={placeholder}
          onChange={(e) => form?.setValue(name!, e.target.value)}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
