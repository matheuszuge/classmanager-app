import Table from "../../components/table/Table";

export const Home = () => {
  const columns = ["Nome", "Idade", "Cidade"];
  const data = [
    { Nome: "Matheus", Idade: 25, Cidade: "São Paulo" },
    { Nome: "Ana", Idade: 30, Cidade: "Rio de Janeiro" },
    { Nome: "Carlos", Idade: 22, Cidade: "Belo Horizonte" },
  ];

  return (
    <>
      <main>
        <Table columns={columns} data={data} />
      </main>
    </>
  );
};
