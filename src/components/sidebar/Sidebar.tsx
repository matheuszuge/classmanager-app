import { NavLink } from "react-router-dom";

export const Sidebar = () => (
  <aside className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-gray-100 shadow-sm z-50">
    <nav className="mt-16 px-4">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-blue-900/30 text-blue-400 border-l-4 border-blue-500"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white hover:translate-x-1"
              }`
            }
            end
          >
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span className="font-medium">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/classroom"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-blue-900/30 text-blue-400 border-l-4 border-blue-500"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white hover:translate-x-1"
              }`
            }
          >
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
            <span className="font-medium">Salas de Aula</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-blue-900/30 text-blue-400 border-l-4 border-blue-500"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white hover:translate-x-1"
              }`
            }
          >
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <span className="font-medium">Usuários</span>
          </NavLink>
        </li>
      </ul>
    </nav>

    {/* Rodapé do Sidebar (opcional) */}
    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          <span className="text-lg font-semibold">U</span>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Usuário Admin</p>
          <p className="text-xs text-gray-400">admin@escola.com</p>
        </div>
      </div>
    </div>
  </aside>
);
