"use client";

import React, { PropsWithChildren, ReactElement } from "react";
import { FieldValues, UseFormReturn, useForm } from "react-hook-form";
import { Button as B } from "./Button";
import { Form as F, FormField } from "./ui/form";

interface IFilter extends PropsWithChildren {
  onSubmit?: (v: any) => void;
  className?: string;
  classname?: string;
  form?: UseFormReturn<FieldValues, any, undefined>;
}

function Root({ onSubmit, className, children }: IFilter) {
  const form = useForm();

  function submit(v: any) {
    onSubmit!(v);
    form.reset;
  }

  return (
    <F {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className={`flex flex-col gap-2 ${className}`}
      >
        {React.Children.map(children, (child, i) =>
          React.cloneElement(child as ReactElement, {
            form: form,
            className: className,
          })
        )}
      </form>
    </F>
  );
}

function Content({ className, form, children }: IFilter) {
  return (
    <FormField
      control={form!.control}
      name=""
      render={({ field }) => (
        <div className={className}>
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child as ReactElement, {
              form: form,
            })
          )}
        </div>
      )}
    />
  );
}

function Button({ classname, children }: IFilter) {
  return (
    <B type="submit" className={classname}>
      {children}
    </B>
  );
}
function QuebraGalho({ className, children, classname }: IFilter) {
  return <div className={`${classname}`}>{children}</div>;
}

export const Form = Object.assign(Root, {
  Content,
  Button,
  QuebraGalho,
});
