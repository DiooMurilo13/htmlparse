"use client";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import React from "react";
import { PropsWithChildren } from "react";

interface ISheetsProps extends PropsWithChildren {
  onOpen?: boolean;
}

export function Sheets({ children }: ISheetsProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-blue-700 text-white p-2">
          Clique aqui
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <div className="scrollbar overflow-x-hidden overflow-y-auto h-full">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
