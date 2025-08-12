import TableCell from "./TableCell";

interface TableRowProps {
  row: Record<string, any>;
}

export default function TableRow({ row }: TableRowProps) {
  return (
    <tr>
      {Object.values(row).map((value: any, index: number) => (
        <TableCell key={index}>{value}</TableCell>
      ))}
    </tr>
  );
}
