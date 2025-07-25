import { Footer } from '../components/footer';
import { Navbar } from '../components/Navbar';
export default function home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="h-screen flex flex-col items-center justify-center text-center bg-gray-600 text-white">
        <h1 className="text-3xl font-bold mb-4">Sobre o Class Manager</h1>
        <p className="mb-2 max-w-xl">
          O Class Manager é um sistema desenvolvido para facilitar o gerenciamento de aulas, turmas e alunos em instituições de ensino.
        </p>
        <p className="max-w-xl">
          Com ele, você pode organizar horários, acompanhar o desempenho dos alunos e otimizar a administração escolar de forma simples e eficiente.
        </p>
      </main>
      <div className="bg-gray-900 text-white pt-12 pb-8">
        <Footer />
      </div>
    </div>
  );
}
