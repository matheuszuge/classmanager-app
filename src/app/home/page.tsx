import { Footer } from '../components/footer';
import { Navbar } from '../components/Navbar';
export default function home() {
  return (
      <div className="">
        <Navbar />
        <main className="h-screen flex flex-col items-center justify-center text-center bg-gray-600 text-white">
          <h1>Bem-vindo ao Class Manager</h1>
          <p>O sistema de gerenciamento de aulas mais completo para instituições de ensino.</p>
        </main>
        <div className="bg-gray-900 text-white pt-12 pb-8">
          <Footer />
        </div>
      </div>
  );
}
