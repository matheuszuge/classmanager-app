import Table from "../../components/table/Table";

const ClassRoom = () => {
  const columns = ["Nome", "Idade", "Cidade"];
  const data = [
    { Nome: "Matheus", Idade: 25, Cidade: "São Paulo" },
    { Nome: "Ana", Idade: 30, Cidade: "Rio de Janeiro" },
    { Nome: "Carlos", Idade: 22, Cidade: "Belo Horizonte" },
  ];

  return (
    <>
      <main>
        <h1>teste</h1>
        <div className="p-4">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </>
  );
};

export default ClassRoom;
