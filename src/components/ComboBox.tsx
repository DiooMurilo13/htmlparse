"use client";
import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { FormControl, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { FieldValues, UseFormReturn } from "react-hook-form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";

export interface IComboBox {
  selectedValue?: number | null;
  name: string;
  size?: "default" | "defaultButton" | "sm" | "lg" | "icon" | null | undefined;
  nameButton: string;
  val: any;
  defaultValue: any;
  form?: UseFormReturn<FieldValues, any, undefined>;
}

export function Combobox({
  name,
  size,
  nameButton,
  val,
  form,
  defaultValue,
}: IComboBox) {
  const [open, setOpen] = React.useState(false);
  const [v, setV] = React.useState(val);
  const [selectedId, setSelectedId] = React.useState<number | null>();

  React.useEffect(() => {
    setV(val);
    const selectedValue = val?.find(
      (objTemp: any) => objTemp.id === defaultValue
    );

    if (defaultValue) {
      setSelectedId(
        selectedValue != null && selectedValue != undefined
          ? selectedValue.id
          : null
      );
    }
  }, [defaultValue, val]);

  return (
    <FormItem className="flex flex-col">
      <FormLabel>{nameButton}</FormLabel>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              aria-expanded={open}
              size={size ? size : "defaultButton"}
            >
              <div className="flex w-full flex-col items-start truncate justify-center py-2">
                <label
                  className={`text-base font-normal ${
                    size === "sm" && selectedId !== null ? "hidden" : ""
                  }`}
                >
                  {nameButton}
                </label>
                {selectedId !== null && (
                  <label className="">
                    {
                      v?.find((objTemp: any) => objTemp.id === selectedId)
                        ?.label
                    }
                  </label>
                )}
              </div>
              <ChevronDown className="h-full w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent
          className={`w-[200px] p-0 ${size === "sm" ? "w-[330px]" : ""}`}
        >
          <Command>
            <CommandInput placeholder="Pesquise..." />
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {v?.map((objTemp: any) => (
                <CommandItem
                  key={objTemp.id}
                  value={objTemp.label}
                  onSelect={() => {
                    form?.setValue(`${name}`, objTemp.id);
                    setSelectedId(objTemp.id);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      selectedId === objTemp.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {objTemp.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </FormItem>
  );
}
