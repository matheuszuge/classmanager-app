import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

type TableProps = {
  columns: string[];
  data: Array<Record<string, any>>;
};

export default function Table({ columns, data }: TableProps) {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <TableHeader columns={columns} />
      <TableBody data={data} />
    </table>
  );
}
