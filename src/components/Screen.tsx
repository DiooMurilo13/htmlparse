import React from "react";
import { PropsWithChildren } from "react";

interface IScreen extends PropsWithChildren {
  id?: string;
  className?: string;
  noSideBar?: boolean;
}

function Root({ noSideBar, children }: IScreen) {
  {
    /* lembrete, tem que ter essa div embaixo se não elew buga o size quando for redimencionar */
  }
  return (
    <div key="screen" className="min-h-screen bg-slate-50 dark:bg-blue-950">
      <div className="min-h-screen">{children}</div>
    </div>
  );
}

function LayoutLeft({ className, children }: IScreen) {
  return (
    <div className={`flex col-start-1 col-end-3 ${className}`}>{children}</div>
  );
}

function Header({ className, children }: IScreen) {
  return <div className=" flex flex-1">{children}</div>;
}
function LayoutRigth({ className, children }: IScreen) {
  return (
    <div className="overflow-y-scroll h-screen col-start-3 col-end-13 scrollbar scrollbar-track-transparent ">
      <div className="flex min-h-screen w-full container mx-auto">
        {children}
      </div>
    </div>
  );
}

function Title({ children }: IScreen) {
  return (
    <h1 className="text-4xl font-semibold text-slate-800 dark:text-white">
      {children}
    </h1>
  );
}

function Container({ className, children }: IScreen) {
  return <div className={`flex flex-col min-h-screen w-full`}>{children}</div>;
}

function Content({ className, children }: IScreen) {
  return <div className={`${className} flex flex-col `}>{children}</div>;
}

function Body({ className, id, children }: IScreen) {
  return <div className=" grid grid-cols-12 min-h-screen">{children}</div>;
}

function NotFound({ className, children }: IScreen) {
  return (
    <div
      className={`flex flex-1 flex-col justify-center items-center ${className}`}
    >
      <div className="text-3xl font-bold">Not Found 404</div>
    </div>
  );
}

export const Screen = {
  Root,
  Container,
  Body,
  Title,
  NotFound,
  LayoutLeft,
  LayoutRigth,
  Header,
  Content,
};
