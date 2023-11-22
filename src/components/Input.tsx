"use client";

import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input as I } from "./ui/input";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface IInputProps extends PropsWithChildren {
  name: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  inputName?: string;
  required?: boolean;
  form?: UseFormReturn<FieldValues, any, undefined>;
  clear?: string;
}

export function Input({
  name,
  inputName,
  form,
  defaultValue,
  value,
  placeholder,
  className,
  required,
  clear,
  type = "text",
  ...rest
}: IInputProps) {
  const [val, setVal] = useState("");

  useEffect(() => {
    setVal("");
  }, [clear, form, name]);

  useEffect(() => {
    form?.setValue(`${name}`, defaultValue);
  }, [defaultValue, form, name]);

  return (
    <FormItem>
      {inputName && <FormLabel>{inputName}</FormLabel>}
      <FormControl>
        <I
          type={type}
          className={`w-full text-sm text-slate-500 rounded-md p-4 border-b-2 ${className}`}
          name={name}
          value={val}
          required={required}
          placeholder={placeholder}
          onChange={(e) => {
            setVal(e.target.value);
            form?.setValue(name!, e.target.value);
          }}
          {...rest}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
