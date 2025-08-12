interface TableHeaderProps {
  columns: string[];
}

export default function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead>
      <tr>
        {columns.map((col: string) => (
          <th key={col} className="border border-gray-300 px-4 py-2">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}
