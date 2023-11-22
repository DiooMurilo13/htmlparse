"use client";

import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useState } from "react";
import { IInputProps } from "./Input";
import { File } from "lucide-react";
import React from "react";

interface FileList {
  name: string;
  size: number;
  type: string;
  lastModified: string;
}

export function FileInput({
  name,
  inputName,
  form,
  defaultValue,
  placeholder,
  className,
  type = "text",
  ...rest
}: IInputProps) {
  const [selectedFile, setSelectedFile] = useState<FileList>();

  const handleFileSelect = (e: any) => {
    const file = e.target.files[0];
    form?.setValue(name!, file);
    setSelectedFile(file);
  };

  return (
    <FormItem>
      {inputName && <FormLabel>{inputName}</FormLabel>}
      <FormControl>
        <label
          className={`w-full flex flex-col items-center p-8 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer ease-linear transition-all duration-150 ${className}`}
        >
          {selectedFile ? null : <File />}
          <span className="mt-2 text-base leading-normal">
            {selectedFile ? selectedFile.name : "Select a file"}
          </span>
          <input
            type={type}
            className={`hidden`}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            onChange={handleFileSelect}
            {...rest}
          />
        </label>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
