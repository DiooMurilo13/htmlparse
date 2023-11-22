"use client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { FormControl, FormItem, FormLabel } from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";
import { IComboBox } from "./ComboBox";
import React from "react";
import { cn } from "@/lib/utils";

export function DatePicker({ nameButton, form, name }: IComboBox) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    form?.setValue(`${name}`, date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormItem className="flex flex-col">
      <FormLabel>{nameButton}</FormLabel>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "flex flex-row py-2 h-14 xl:w-40 xs:w-52 px-4",
                !date && "text-muted-foreground"
              )}
            >
              <div className="flex w-full flex-col items-start truncate">
                <label className="text-base font-normal">{nameButton}</label>
                {date ? (
                  format(date, "dd/MM/yyyy")
                ) : (
                  <span>Escolha uma data</span>
                )}
              </div>

              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(objTemp) => {
              form?.setValue(`${name}`, objTemp === date ? null : objTemp);
              setDate(objTemp === date ? objTemp : objTemp);
              setOpen(false);
            }}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </FormItem>
  );
}
