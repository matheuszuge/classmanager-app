import Table from "../../components/table/Table";
import Button from "../../components/button/Button";

const ClassRoom = () => {
  const columns = [
    "Nome",
    "Capacidade",
    "Localização",
    "Equipamentos",
    "Status",
  ];
  const data = [
    {
      Nome: "Sala 101",
      Capacidade: 30,
      Localização: "Bloco A",
      Equipamentos: "Projetor, Ar-condicionado",
      Status: "Disponível",
    },
    {
      Nome: "Lab. Informática",
      Capacidade: 20,
      Localização: "Bloco B",
      Equipamentos: "Computadores, Projetor",
      Status: "Em manutenção",
    },
    {
      Nome: "Auditório",
      Capacidade: 100,
      Localização: "Bloco Central",
      Equipamentos: "Som, Projetor, Ar-condicionado",
      Status: "Disponível",
    },
  ];

  const handleAddClassroom = () => {
    console.log("Adicionar nova sala de aula");
  };

  return (
    <main className="p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Salas de Aula</h1>
        <Button onClick={handleAddClassroom} variant="primary">
          Adicionar Sala
        </Button>
        <Button variant="primary">Agendar Sala</Button>
      </div>
      <div className="bg-white rounded-lg  p-4">
        <div className="mb-4 flex gap-4">
          <input
            type="text"
            placeholder="Buscar sala..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Todos os status</option>
            <option value="available">Disponível</option>
            <option value="maintenance">Em manutenção</option>
            <option value="occupied">Ocupada</option>
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

export default ClassRoom;
