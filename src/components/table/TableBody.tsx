import TableRow from "./TableRow";

type TableBodyProps = {
  data: Array<Record<string, any>>;
};

export default function TableBody({ data }: TableBodyProps) {
  return (
    <tbody>
      {data.map((row, index) => (
        <TableRow key={index} row={row} />
      ))}
    </tbody>
  );
}
