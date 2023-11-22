import * as React from "react";
interface ICollumnBody extends React.PropsWithChildren {
  className?: string;
  tableName?: string;
}
function CollumnBody({ className, children }: ICollumnBody) {
  return (
    <th
      scope="row"
      className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${className}`}
    >
      {children}
    </th>
  );
}

function CollumBodyInRow({ className, children }: ICollumnBody) {
  return (
    <div
      className={`flex flex-row gap-2 items-center justify-center${className}`}
    >
      {children}
    </div>
  );
}

function CollumnHeader({ className, children }: ICollumnBody) {
  return (
    <th scope="col" className={`px-6 py-3  ${className}`}>
      {children}
    </th>
  );
}

function Header({ children }: React.PropsWithChildren) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-slate-100  dark:bg-gray-700 dark:text-gray-400 border-b-2">
      <tr className="w-full">{children}</tr>
    </thead>
  );
}

function Body({ className, children }: ICollumnBody) {
  return <tbody className="">{children}</tbody>;
}

function RowBody({ children }: React.PropsWithChildren) {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      {children}
    </tr>
  );
}

export function TableMain({ tableName, className, children }: ICollumnBody) {
  return (
    <div className={`relative  overflow-x-auto sm:rounded-lg ${className}`}>
      {tableName ? (
        <div className="py-7 text-xl font-bold text-blue-800 w-full bg-white rounded-sm ">
          {tableName}
        </div>
      ) : (
        ""
      )}
      <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  );
}

export const Table = Object.assign(TableMain, {
  CollumnBody,
  CollumnHeader,
  Header,
  Body,
  RowBody,
  CollumBodyInRow,
});
