import Table from "../../components/table/Table";
import Button from "../../components/button/Button";

const Users = () => {
  const columns = ["Nome", "Função", "Status"];
  const data = [
    {
      Nome: "Admin",
      Role: "Admin",
      Status: "Disponível",
    },
  ];

  const handleAddClassroom = () => {
    console.log("Adicionar novo usuario");
  };

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Usuarios</h1>
        <Button onClick={handleAddClassroom} variant="primary">
          Adicionar Usuario
        </Button>
      </div>
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4 flex gap-4">
          <input
            type="text"
            placeholder="Buscar Usuario..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todos os status</option>
            <option value="available">Disponível</option>
            <option value="maintenance">Em manutenção</option>
            <option value="occupied">Ocupada</option>
          </select>
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todos os Função</option>
            <option value="admin">Admin</option>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
          </select>
        </div>
        <Table columns={columns} data={data} className="w-full" />
        <div className="mt-4 flex justify-end">
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-md">Anterior</button>
            <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">Próximo</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Users;
