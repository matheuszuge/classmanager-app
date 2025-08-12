export default function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="border border-gray-300 px-4 py-2">{children}</td>;
}
